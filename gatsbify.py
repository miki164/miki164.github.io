import re
import os

CONTENT_PATH = "./content/"

def change_image_brackets(f) -> None:
   # \!\[\[(.*?)\]\]
   regex = re.compile(r"\!\[\[(.*?)\]\]")
   new_content = []
   for line in f.readlines():
      if result := regex.search(line):
          image = result.groups()[0]
          new_content.append("![{}]({})\n\n".format(image, image))
          continue
      new_content.append(line)

   f.seek(0)
   f.writelines(new_content)


if __name__ == "__main__":
    for i in os.listdir(CONTENT_PATH):
        with open(CONTENT_PATH + i, 'r+') as f:
            change_image_brackets(f)
            f.close()
