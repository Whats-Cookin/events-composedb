// This is an auto-generated file, do not edit manually
export const definition = {"models":{"Event":{"id":"kjzl6hvfrbw6c7a6gmakc57y647kmdn73np1jlhoafgf7lfb8z4l3qm8236vntn","accountRelation":{"type":"list"}},"EventEntry":{"id":"kjzl6hvfrbw6c8gcnj2wkjlu236w6x9i8o4xgcq8htgo2iiupfu80hgao3y827g","accountRelation":{"type":"list"}}},"objects":{"Event":{"eventName":{"type":"string","required":true}},"EventEntry":{"event":{"type":"streamid","required":true},"title":{"type":"string","required":true},"location":{"type":"string","required":true},"description":{"type":"string","required":false},"endDateTime":{"type":"datetime","required":true},"startDateTime":{"type":"datetime","required":true},"eventcard":{"type":"view","viewType":"relation","relation":{"source":"document","model":"kjzl6hvfrbw6c7a6gmakc57y647kmdn73np1jlhoafgf7lfb8z4l3qm8236vntn","property":"event"}}}},"enums":{},"accountData":{"eventList":{"type":"connection","name":"Event"},"eventEntryList":{"type":"connection","name":"EventEntry"}}}