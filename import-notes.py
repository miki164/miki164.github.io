#!/bin/python
import shutil
import os

CONTENT_PATH = "./content/"
IGNORED_FILES = [".stignore"]
def get_all_files(path: str, destination_folder: str) -> None:
    for file_name in os.listdir(path):
        source = path + file_name
        destination = destination_folder + file_name

        if file_name in IGNORED_FILES:
            continue
        elif os.path.isfile(source):
            shutil.copy(source, destination)
            print('copied', file_name)
        else:
            get_all_files(source + "/", destination_folder)

def clean_the_content() -> None:
    for file_name in os.listdir(CONTENT_PATH):
        try:
            file_name = CONTENT_PATH + file_name
            os.remove(file_name)
            print("Deleted " + file_name)
        except OSError as e:
            print(e)

if __name__ == "__main__":
    clean_the_content()

    SOURCE_PATH = "../notes/🧠 My knowledge/"
    get_all_files(SOURCE_PATH, CONTENT_PATH)
