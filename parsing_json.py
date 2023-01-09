import json
import codecs

path_to_json = "database/result.json"

path_to_new_json = "database/pars.json"

with codecs.open(path_to_json, "r", "utf_8_sig") as read_file:
    dictdata = json.load(read_file)

dictdata["messages"].pop(0)
dictdata["messages"].pop(0)

for d in dictdata["messages"]:
    d.pop('type')
    d.pop('date')
    d.pop('date_unixtime')
    d.pop('edited', 0)
    d.pop('edited_unixtime', 0)
    d.pop('from')
    d.pop('from_id')
    d.pop('text_entities')

with codecs.open(path_to_new_json, "w", "utf_8_sig") as write_file:
    write_file.write(json.dumps(dictdata, sort_keys=False, indent=4, ensure_ascii=False, separators=(',', ': ')))
