import sys
from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QLineEdit, QPushButton, QListWidget, QLabel
from PyQt5.QtCore import Qt, QUrl
from PyQt5.QtGui import QStandardItemModel, QStandardItem
import PyPDF2

class PdfMetadataEditor(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()
        
    def initUI(self):
        self.setWindowTitle('PDF Metadata Editor')
        self.setGeometry(100, 100, 600, 400)
        
        layout = QVBoxLayout()
        self.setLayout(layout)
        
        self.listWidget = QListWidget()
        self.listWidget.setAcceptDrops(True)
        self.listWidget.setDragDropMode(QListWidget.InternalMove)
        self.listWidget.dragEnterEvent = self.dragEnterEvent
        self.listWidget.dropEvent = self.dropEvent
        layout.addWidget(self.listWidget)
        
        self.titleLabel = QLabel('Title:')
        self.titleInput = QLineEdit()
        layout.addWidget(self.titleLabel)
        layout.addWidget(self.titleInput)
        
        self.subjectLabel = QLabel('Subject:')
        self.subjectInput = QLineEdit()
        layout.addWidget(self.subjectLabel)
        layout.addWidget(self.subjectInput)
        
        self.keywordsLabel = QLabel('Keywords:')
        self.keywordsInput = QLineEdit()
        layout.addWidget(self.keywordsLabel)
        layout.addWidget(self.keywordsInput)
        
        self.saveButton = QPushButton('Save Metadata')
        self.saveButton.setStyleSheet("background-color: lightgreen;")
        self.saveButton.clicked.connect(self.saveMetadata)
        layout.addWidget(self.saveButton)
        
        # Connect the list widget itemClicked signal to loadMetadata for the clicked path
        self.listWidget.itemClicked.connect(lambda item: self.loadMetadata(item.text()))
        
    def dragEnterEvent(self, event):
        if event.mimeData().hasUrls():
            event.accept()
        else:
            event.ignore()

    def dropEvent(self, event):
        files = [url.toLocalFile() for url in event.mimeData().urls()]
        for file in files:
            self.listWidget.addItem(file)
        self.loadMetadata(files[0])

    def loadMetadata(self, file_path):
        with open(file_path, 'rb') as f:
            pdf = PyPDF2.PdfReader(f)
            info = pdf.metadata
            self.titleInput.setText(info.get('/Title', ''))
            self.subjectInput.setText(info.get('/Subject', ''))
            keywords = info.get('/Keywords', '')
            self.keywordsInput.setText(keywords if keywords else '')

    def saveMetadata(self):
        file_path = self.listWidget.currentItem().text()
        with open(file_path, 'rb') as f:
            pdf_reader = PyPDF2.PdfReader(f)
            pdf_writer = PyPDF2.PdfWriter()

            # Transfer all pages to the writer
            for page in pdf_reader.pages:
                pdf_writer.add_page(page)
            
            # Prepare new metadata
            new_metadata = {
                '/Title': PyPDF2.generic.create_string_object(self.titleInput.text()),
                '/Subject': PyPDF2.generic.create_string_object(self.subjectInput.text()),
                '/Keywords': PyPDF2.generic.create_string_object(self.keywordsInput.text())
            }

            # If there's existing metadata, update it; otherwise, use new metadata
            if pdf_reader.metadata:
                existing_metadata = dict(pdf_reader.metadata)
                existing_metadata.update(new_metadata)
                pdf_writer.add_metadata(existing_metadata)
            else:
                pdf_writer.add_metadata(new_metadata)

            # Save the PDF with new metadata
            with open(file_path, 'wb') as outfile:
                pdf_writer.write(outfile)

if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = PdfMetadataEditor()
    ex.show()
    sys.exit(app.exec_())
