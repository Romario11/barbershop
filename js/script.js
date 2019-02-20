
alert("Hello world")
for (var i = 0; i <10; i++) {
	alert(i);
}
if (true) {
	if (true) {}
		else{}
}

class People{
	var name;
	var age;
}

export class Message {
  constructor(public author: string, public content: string) {}
}
@Injectable()
export class ChatService {
  constructor() {}
  conversation = new Subject<Message[]>();
  messageMap = {
    "Hi": "Hello",
    "Who are you": "My name is Agular Bot",
    "What is Angular": "Angular is the best framework ever",
    "default": "I can't understand. Can you please repeat"
  }
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}