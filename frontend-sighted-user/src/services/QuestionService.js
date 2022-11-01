import BaseHttpService from './BaseHttpService';


const FakeQuestionList = [{
  "id": "e3e098b5-6691-40b8-b1ff-ef5742e10e72",
  "topics": ["Game","Tech"],
  "title": "Date with an Angel",
  "description": "Injury to external carotid artery",
  "owner_id": "845f3596-1585-4edf-8d54-c75fc4d3335e",
  "answers": [{
  "id": "a6167d76-d968-4e80-8a5a-ec3e347d69b7",
  "username": "fattaway0",
  "description": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus."
}, {
  "id": "82b83435-df32-4873-a7d9-99d322afb2d0",
  "username": "pdoman1",
  "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
}, {
  "id": "ee57f93e-2ce7-40bb-99e6-f3bde0634f46",
  "username": "cmatson2",
  "description": "Proin at turpis a pede posuere nonummy."
}],
  "dateofAdded": "10/28/2022",
  "reported": false,
  "amountOfLikes": 12
}, {
  "id": "be3e1454-0231-47b1-8664-6cd6761bb4c4",
  "topics": ["Tech"],
  "title": "Story of Film: An Odyssey, The",
  "description": "Sexual masochism",
  "owner_id": "766f5c02-20dc-43ef-b6cf-53836846ec7c",
  "answers": [{
  "id": "6f3a43f6-8694-47d0-9008-9cd0a073e659",
  "username": "aroo0",
  "description": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst."
}, {
  "id": "21feb235-6beb-4302-b662-3d98621f84ca",
  "username": "fkelle1",
  "description": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo."
}, {
  "id": "cc0248ff-25d6-4fc0-981d-72cfb7ec9977",
  "username": "dguerreiro2",
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
}],
  "dateofAdded": "5/16/2022",
  "reported": false,
  "amountOfLikes": 58
}, {
  "id": "931b12c7-af23-4de8-bfea-c6f65f766ecf",
  "topics": ["Tech"],
  "title": "Infinity",
  "description": "Unspecified venous complication of pregnancy and the puerperium, delivered, with mention of postpartum complication",
  "owner_id": "1043c1a1-5735-448b-bc7b-b624bf82d8d5",
  "answers": [
    {
  "id": "fbe121bd-1545-4274-be36-22de1e83cf92",
  "username": "cinchboard1",
  "description": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus."
}
  ],
  "dateofAdded": "2/26/2022",
  "reported": true,
  "amountOfLikes": 36
}, {
  "id": "9c399896-004b-4d81-a17c-7342f6658ab6",
  "topics": ["Food"],
  "title": "Next Step, The",
  "description": "Other disorders of plasma protein metabolism",
  "owner_id": "9603c456-b479-49ee-98ac-2cf59448ed8f",
  "answers": [{
  "id": "7dc1b793-c0af-4423-ac64-b26d440ce712",
  "username": "bdixcey0",
  "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
}, {
  "id": "f9828753-2fd3-47a3-a207-d82e78e5e159",
  "username": "zwooder1",
  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "id": "c8fb4e58-3293-4250-9cf7-641bcd621cd2",
  "username": "jneljes2",
  "description": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor."
}],
  "dateofAdded": "6/4/2022",
  "reported": false,
  "amountOfLikes": 80
}, {
  "id": "6e9b4635-8036-4d04-8c4c-f9807cf4c52a",
  "topics": ["Food"],
  "title": "Flight of the Intruder",
  "description": "Poisoning by antidotes and chelating agents, not elsewhere classified",
  "owner_id": "7b65ba30-ecec-4b97-b0dc-4d05f8e5c6c7",
  "answers": [{
  "id": "d56f8bc1-7b0c-45ab-8f21-fc106592e648",
  "username": "smellish0",
  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
}, {
  "id": "93742b3e-6b6c-4425-90bf-9921b47d6ed5",
  "username": "nguyet1",
  "description": "Donec posuere metus vitae ipsum."
}, {
  "id": "0805e2c0-0226-45e1-acc2-6f7d29a8c385",
  "username": "mscroxton2",
  "description": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio."
}],
  "dateofAdded": "4/30/2022",
  "reported": false,
  "amountOfLikes": 36
}, {
  "id": "151dd926-9ff1-4f99-bf3a-55fe4d80b283",
  "topics": ["Food"],
  "title": "Yesterday, Today and Tomorrow (Ieri, oggi, domani)",
  "description": "Grand mal status",
  "owner_id": "53683dcb-b327-4ceb-b902-bc607f58414e",
  "answers": [{
  "id": "b7df256e-13f8-4608-b102-5576c107e6a6",
  "username": "smorgan0",
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci."
}],
  "dateofAdded": "4/23/2022",
  "reported": false,
  "amountOfLikes": 10
}, {
  "id": "17e4a9c5-f39d-4a55-b8a3-a87c537c7063",
  "topics": ["Game"],
  "title": "Life Less Ordinary, A",
  "description": "Abdominal tenderness, periumbilic",
  "owner_id": "50ec6bfa-c309-4438-91c0-2d4b268cd0a4",
  "answers": [{
  "id": "8acf0887-3689-4776-93d5-c78c43dac8f5",
  "username": "aevenett0",
  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci."
}],
  "dateofAdded": "5/4/2022",
  "reported": true,
  "amountOfLikes": 86
}, {
  "id": "922a16fd-fd77-4e34-af7a-d79dde6feb80",
  "topics": ["Food"],
  "title": "Dead or Alive 2: Tôbôsha",
  "description": "Pressure ulcer, stage III",
  "owner_id": "c5f06817-032d-41a0-9f60-ba7dbe5c786c",
  "answers": [{
  "id": "d4f9fc6c-d057-4d28-825f-020ed028837e",
  "username": "bbasindale0",
  "description": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor."
}, {
  "id": "ff31cde0-f285-484f-824f-5821ed5c5fff",
  "username": "dfalcus1",
  "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt."
}, {
  "id": "62c24039-fb55-44a7-860e-750e9ba4cc80",
  "username": "csyrett2",
  "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam."
}, {
  "id": "86a5e513-f02f-4afc-a52f-b95f30e3135b",
  "username": "kalthrop3",
  "description": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
}],
  "dateofAdded": "2/21/2022",
  "reported": false,
  "amountOfLikes": 68
}, {
  "id": "4620d19f-6718-4e4a-8a95-fe96755ebedc",
  "topics": ["Food"],
  "title": "Shallow Hal",
  "description": "Conductive hearing loss, bilateral",
  "owner_id": "cabceb41-0d2f-46b1-b6c7-4e8fe3c470db",
  "answers": [{
  "id": "350980a2-eb04-4840-ada1-3c6376ca720a",
  "username": "ogossage0",
  "description": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla."
}],
  "dateofAdded": "9/11/2022",
  "reported": true,
  "amountOfLikes": 49
}, {
  "id": "d45d75a6-60e7-44a2-a7ea-699fe5f03729",
  "topics": ["Pets"],
  "title": "Married to It",
  "description": "Injury due to depth charge",
  "owner_id": "1eb4b653-7c03-47ff-aea8-7cdfe1780882",
  "answers": [{
  "id": "fc4ded08-bc1b-4d7f-9672-f82653532d2e",
  "username": "flamberth0",
  "description": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus."
}],
  "dateofAdded": "4/9/2022",
  "reported": true,
  "amountOfLikes": 18
}]



 export  class QuestionService extends BaseHttpService {

  GetMyFeedQuestionList() {
    //TODO: Fetch real data from backend
    return FakeQuestionList;
  }
  async GetQuestion(questionId){
    //TODO: Fetch real data from backend
    const Question =  FakeQuestionList.find(question=>question.id===questionId);
    return Question;
  }
}

export default new QuestionService('QuestionService')