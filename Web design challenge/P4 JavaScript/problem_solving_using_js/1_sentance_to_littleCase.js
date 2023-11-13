let sentance = 'Spam is a hot topic for decades. After all the tech advancements still all of us stumble upon spam messages then and now. Spam has become more realistic where a normal people could not distinguish whether it is real or not. Random job offers appearing on your WhatsApp messenger from unknown source, Spam messages on every comment section of almost all the social medias. Occasionally, individuals may receive spam messages from their friends. Tech giants are spending millions to keep these spammers from their application. The project titled “ONLINE CHATTING WEBSITE WITH SPAM MESSAGE DETECTION” is aimed to provide a spam free chatting system to users. To detect and avoid spam messages we canuse natural language processing and machine learning';
let result = toLittleCase(sentance);
console.log(result);

function toLittleCase(sent){
    let str = sent[0].toUpperCase();
    for ( let i = 1; i < sent.length-1; i++ ){
        str += [' ', '"', "'"].includes(sent[i - 1]) ? sent[i].toUpperCase() : sent[i].toLowerCase();
        }
        return str;
    };
    
