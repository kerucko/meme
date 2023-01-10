import json
import codecs
import os

path_to_json = "result.json"

path_to_new_json = "pars.json"

with codecs.open(path_to_json, "r", "utf_8_sig") as read_file:
    dictdata = json.load(read_file)

dictdata["messages"].pop(0)
dictdata["messages"].pop(0)

photo_id = 1

for d in dictdata["messages"]:
    d.pop('type')
    d.pop('date')
    d.pop('date_unixtime')
    d.pop('edited', 0)
    d.pop('edited_unixtime', 0)
    d.pop('from')
    d.pop('from_id')
    d.pop('text_entities')

    photo_src = d['photo']
    d['id'] = photo_id
    new_photo_src = f"photos/photo_{photo_id}.jpg"
    os.rename(photo_src, new_photo_src)
    d['photo'] = new_photo_src
    photo_id += 1


with codecs.open(path_to_new_json, "w", "utf_8_sig") as write_file:
    write_file.write(json.dumps(dictdata["messages"], sort_keys=False, indent=4, ensure_ascii=False, separators=(',', ': ')))
