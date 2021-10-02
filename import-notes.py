#!/bin/sh
import shutil
import os

def get_all_files(path: str, destination_folder: str):
    for file_name in os.listdir(path):
        source = path + file_name
        destination = destination_folder + file_name
        if os.path.isfile(source):
            shutil.copy(source, destination)
            print('copied', file_name)

SOURCE_PATH = "../notes/🧠 My knowledge/"
DESTINATION_PATH = "./content/"
get_all_files(SOURCE_PATH, DESTINATION_PATH)

SOURCE_PATH = "../notes/📖 Books"
get_all_files(SOURCE_PATH, DESTINATION_PATH)
