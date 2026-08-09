const QUICK_PREP = [
  {day:1,title:'Meet Odysseus',cards:[
    {type:'people',title:'👤 People to Know',entries:[{name:'Odysseus',zh:'奧德修斯',en:'King of Ithaca and the central hero of The Odyssey. He is famous for intelligence, strategy, and clever problem-solving.',zhd:'伊薩卡國王，也是《奧德賽》的核心人物。他以機智、策略與善用計謀解決問題聞名。'}]},
    {type:'words',words:[['voyage','航程；航海旅程'],['warrior','戰士'],['kingdom','王國']]},
    {type:'info',en:'The Odyssey takes place after the Trojan War.',zh:'《奧德賽》的故事發生在特洛伊戰爭結束之後。'}
  ]},
  {day:2,title:"Odysseus’s Family",cards:[
    {type:'people',title:'👤 People to Know',entries:[
      {name:'Penelope',zh:'佩涅洛佩',en:"Odysseus’s wife and queen of Ithaca. She has been waiting for his return for many years.",zhd:'奧德修斯的妻子，也是伊薩卡王后。她已經等待丈夫返鄉許多年。'},
      {name:'Telemachus',zh:'忒勒馬科斯',en:'Son of Odysseus and Penelope.',zhd:'奧德修斯與佩涅洛佩的兒子。'}]},
    {type:'words',words:[['queen','王后'],['heir','繼承人'],['suitor','求婚者']]},
    {type:'info',en:'Odysseus has been away from Ithaca for many years.',zh:'奧德修斯已經離開伊薩卡很多年。'}
  ]},
  {day:3,title:'The Gods',cards:[
    {type:'people',title:'👤 People to Know',entries:[
      {name:'Athena',zh:'雅典娜',en:'Goddess of wisdom and strategy. She is an important ally of Odysseus.',zhd:'智慧與戰略女神，也是奧德修斯重要的盟友。'},
      {name:'Poseidon',zh:'波塞頓',en:'God of the sea and one of the major divine forces opposing Odysseus.',zhd:'海神，也是阻礙奧德修斯返鄉的重要神祇之一。'}]},
    {type:'words',words:[['mortal','凡人'],['divine','神的；神聖的'],['wrath','盛怒；震怒']]},
    {type:'recall',questions:[{q:'Who is Odysseus?',opts:['King of Ithaca','God of the sea','Son of Poseidon'],a:0}]}
  ]},
  {day:4,title:'Places to Recognize',cards:[
    {type:'myth',title:'🗺️ Places to Know',entries:[
      {name:'Ithaca',zh:'伊薩卡',en:"Odysseus’s home and kingdom.",zhd:'奧德修斯的家鄉與王國。'},
      {name:'Troy',zh:'特洛伊',en:"The city connected to the Trojan War. Odysseus’s long journey home begins after the war.",zhd:'與特洛伊戰爭相關的城市。奧德修斯漫長的返鄉旅程從戰爭結束後開始。'}]},
    {type:'words',words:[['homeland','家鄉'],['fleet','艦隊；船隊'],['shore','海岸']]},
    {type:'info',en:'Ithaca is the destination Odysseus is trying to reach.',zh:'伊薩卡是奧德修斯一直想回去的目的地。'}
  ]},
  {day:5,title:'Cyclops',cards:[
    {type:'myth',entries:[
      {name:'Polyphemus',zh:'波呂斐摩斯',en:'A Cyclops and the son of Poseidon.',zhd:'一名獨眼巨人，也是波塞頓的兒子。'},
      {name:'Cyclops',zh:'獨眼巨人',en:'A giant with one eye.',zhd:'只有一隻眼睛的巨人。'}]},
    {type:'words',words:[['giant','巨人'],['cave','洞穴'],['stake','木樁；尖木棒']]},
    {type:'recall',questions:[{q:'Who is Poseidon?',opts:['God of the sea','King of Ithaca',"Odysseus’s son"],a:0}]}
  ]},
  {day:6,title:'Magic & Circe',cards:[
    {type:'people',entries:[
      {name:'Circe',zh:'瑟西',en:'A goddess and enchantress with powerful magic. She has an important interaction with Odysseus.',zhd:'擁有強大魔法的女神與女巫，與奧德修斯有重要互動。'},
      {name:'Hermes',zh:'赫密士',en:'Messenger of the gods.',zhd:'眾神的使者。'}]},
    {type:'words',words:[['spell','咒語；魔法'],['transform','變形；變成'],['enchant','施魔法；使著迷'],['ally','盟友']]},
    {type:'recall',questions:[{q:'Penelope is:',opts:["Odysseus’s wife","Odysseus’s sister",'Goddess of wisdom'],a:0}]}
  ]},
  {day:7,title:'Prophecy & the Underworld',cards:[
    {type:'myth',title:'🐉 People & Mythology to Know',entries:[
      {name:'Tiresias',zh:'忒瑞西阿斯',en:'A famous prophet whose knowledge can guide Odysseus.',zhd:'著名先知，他的預言與知識能為奧德修斯提供指引。'},
      {name:'Underworld / Hades',zh:'冥界',en:'The world of the dead in Greek mythology.',zhd:'希臘神話中的死者世界。'}]},
    {type:'words',words:[['prophecy','預言'],['fate','命運'],['warning','警告']]},
    {type:'info',en:'Prophecy and fate are important ideas in Greek mythology.',zh:'預言與命運是希臘神話中非常重要的概念。'}
  ]},
  {day:8,title:'The Sirens',cards:[
    {type:'myth',entries:[{name:'Sirens',zh:'賽蓮女妖',en:'Mythical creatures whose beautiful voices lure sailors into danger.',zhd:'以美麗歌聲引誘水手走向危險的神話生物。'}]},
    {type:'words',words:[['lure','引誘'],['resist','抵抗'],['temptation','誘惑']]},
    {type:'recall',questions:[{q:'Circe is best described as:',opts:['Goddess / enchantress','Queen of Ithaca','Mortal sailor'],a:0}]}
  ]},
  {day:9,title:'Sea Monsters',cards:[
    {type:'myth',entries:[
      {name:'Scylla',zh:'斯庫拉',en:'A dangerous sea monster.',zhd:'危險的海怪。'},
      {name:'Charybdis',zh:'卡律布狄斯',en:'A sea monster associated with a deadly whirlpool.',zhd:'與致命大漩渦相關的海怪。'}]},
    {type:'words',words:[['monster','怪物'],['whirlpool','漩渦'],['peril','危險']]},
    {type:'recall',questions:[{q:'Which two are sea threats?',opts:['Scylla and Charybdis','Athena and Penelope','Telemachus and Hermes'],a:0}]}
  ]},
  {day:10,title:'Gods, Rules & Sacred Things',cards:[
    {type:'people',entries:[{name:'Helios',zh:'赫利俄斯',en:'The sun god.',zhd:'太陽神。'}]},
    {type:'words',words:[['sacred','神聖的'],['forbid','禁止'],['obey','服從']]},
    {type:'recall',intro:{en:'Disrespecting the gods can have serious consequences in the world of The Odyssey.',zh:'在《奧德賽》的世界中，冒犯神祇可能帶來嚴重後果。'},questions:[{q:'Athena is associated with:',opts:['Wisdom and strategy','The sea','The Underworld'],a:0}]}
  ]},
  {day:11,title:'Calypso',cards:[
    {type:'people',entries:[{name:'Calypso',zh:'卡呂普索',en:"A goddess whose island becomes an important part of Odysseus’s journey.",zhd:'一位女神，她居住的島嶼是奧德修斯旅程中的重要地點。'}]},
    {type:'words',words:[['immortal','不死的；永生的'],['longing','渴望；思念'],['captive','被困住的人；俘虜']]},
    {type:'recall',questions:[{q:'mortal means:',opts:['A being that can die','A god','A monster'],a:0}]}
  ]},
  {day:12,title:'Ithaca & the Suitors',cards:[
    {type:'people',title:'👥 People & Group to Know',entries:[
      {name:'Suitors',zh:'求婚者們',en:'Men competing to marry Penelope while Odysseus is absent.',zhd:'在奧德修斯長期不在時，爭相向佩涅洛佩求婚的一群男人。'},
      {name:'Penelope',zh:'佩涅洛佩',en:"Odysseus’s wife.",zhd:'奧德修斯的妻子。'},
      {name:'Telemachus',zh:'忒勒馬科斯',en:"Odysseus’s son.",zhd:'奧德修斯的兒子。'}]},
    {type:'words',words:[['loyalty','忠誠'],['throne','王位'],['suitor','求婚者']]},
    {type:'info',en:"Odysseus’s long absence has changed the situation in Ithaca.",zh:'奧德修斯長期不在，使伊薩卡的局勢產生了變化。'}
  ]},
  {day:13,title:'Loyal People',cards:[
    {type:'people',entries:[
      {name:'Eumaeus',zh:'歐邁俄斯',en:"A loyal swineherd connected to Odysseus’s household.",zhd:'與奧德修斯家族有關、忠誠的牧豬人。'},
      {name:'Eurycleia',zh:'歐律克勒亞',en:"An elderly and trusted woman in Odysseus’s household.",zhd:'奧德修斯家中年長且值得信任的重要人物。'}]},
    {type:'words',words:[['servant','僕人'],['loyal','忠誠的'],['recognize','認出']]},
    {type:'recall',questions:[{q:'Telemachus is:',opts:["Odysseus’s son","Poseidon’s son",'A Cyclops'],a:0}]}
  ]},
  {day:14,title:'Main Suitors',cards:[
    {type:'people',entries:[
      {name:'Antinous',zh:'安提諾俄斯',en:'One of the most prominent suitors pursuing Penelope.',zhd:'追求佩涅洛佩的主要求婚者之一。'},
      {name:'Eurymachus',zh:'歐律馬科斯',en:'Another important suitor in Ithaca.',zhd:'伊薩卡另一位重要求婚者。'}]},
    {type:'words',words:[['arrogant','傲慢的'],['intruder','闖入者'],['claim','聲稱；宣稱擁有']]},
    {type:'recall',questions:[{q:'A suitor is:',opts:['Someone seeking marriage','A sea monster','A prophet'],a:0}]}
  ]},
  {day:15,title:'Identity & Disguise',cards:[
    {type:'people',title:'👤 Quick People Recall',entries:[
      {name:'Odysseus',zh:'奧德修斯',en:'King of Ithaca.',zhd:'伊薩卡國王。'},
      {name:'Athena',zh:'雅典娜',en:'Goddess of wisdom and strategy; ally of Odysseus.',zhd:'智慧與戰略女神，也是奧德修斯的盟友。'}]},
    {type:'words',words:[['disguise','偽裝'],['conceal','隱藏'],['reveal','揭露'],['identity','身分']]},
    {type:'recall',questions:[{q:'Who is associated with wisdom and strategy?',opts:['Athena','Poseidon','Polyphemus'],a:0}]}
  ]},
  {day:16,title:'Character Check',cards:[
    {type:'recall',questions:[
      {q:'Who is Odysseus?',opts:['King of Ithaca','God of the sea','Prophet'],a:0},
      {q:'Who is Penelope?',opts:["Odysseus’s wife","Athena’s daughter",'A Siren'],a:0},
      {q:'Who is Telemachus?',opts:["Odysseus’s son",'A Cyclops','King of Troy'],a:0},
      {q:'Who is Circe?',opts:['Goddess / enchantress','Queen of Ithaca','Mortal sailor'],a:0}]},
    {type:'words',words:[['cunning','機智；善於用計'],['loyalty','忠誠'],['deception','欺騙']]}
  ]},
  {day:17,title:'Mythology Check',cards:[
    {type:'recall',questions:[
      {q:'Poseidon is:',opts:['God of the sea','King of Ithaca','A prophet'],a:0},
      {q:'Athena is:',opts:['Goddess of wisdom and strategy','A Siren','Queen of Ithaca'],a:0},
      {q:'The Sirens are:',opts:['Creatures whose voices lure sailors','Sea gods','Warriors'],a:0},
      {q:'Scylla is:',opts:['A sea monster','A queen','A prophet'],a:0},
      {q:'Charybdis is:',opts:['A deadly whirlpool-like sea threat','A goddess','A city'],a:0}]},
    {type:'words',words:[['divine','神的'],['prophecy','預言'],['vengeance','復仇']]}
  ]},
  {day:18,title:'Relationship Check',cards:[
    {type:'recall',questions:[
      {q:'Penelope is:',opts:["Odysseus’s wife","Odysseus’s enemy",'A goddess'],a:0},
      {q:'Telemachus is:',opts:["Odysseus’s son","Poseidon’s son",'A suitor'],a:0},
      {q:'Polyphemus is:',opts:["Poseidon’s son","Odysseus’s son",'Athena’s ally'],a:0},
      {q:'Athena is:',opts:["Odysseus’s divine ally","Odysseus’s wife",'A sea monster'],a:0}]},
    {type:'words',words:[['ally','盟友'],['enemy','敵人'],['son','兒子'],['wife','妻子']]}
  ]},
  {day:19,title:'Name Recognition',cards:[
    {type:'nameAudio',questions:[
      {name:'Odysseus',opts:['Odysseus','Poseidon','Tiresias']},
      {name:'Circe',opts:['Charybdis','Calypso','Circe']},
      {name:'Telemachus',opts:['Telemachus','Polyphemus','Eumaeus']},
      {name:'Polyphemus',opts:['Poseidon','Polyphemus','Penelope']},
      {name:'Charybdis',opts:['Charybdis','Calypso','Circe']},
      {name:'Tiresias',opts:['Tiresias','Telemachus','Antinous']}]},
    {type:'info',en:'Listen for the complete sound of each name. Instant recognition will make dialogue easier to follow.',zh:'請聽完整個名字的聲音。能立即辨認名字，會讓你更容易跟上電影對話。'}
  ]},
  {day:20,title:'Final Movie Warm-Up',cards:[
    {type:'recall',title:'🎬 Movie Ready Check',questions:[
      {q:'Who is the king of Ithaca?',opts:['Odysseus','Poseidon','Tiresias'],a:0},
      {q:"Who is Odysseus’s wife?",opts:['Penelope','Athena','Circe'],a:0},
      {q:"Who is Odysseus’s son?",opts:['Telemachus','Polyphemus','Antinous'],a:0},
      {q:'Who is the goddess of wisdom and strategy?',opts:['Athena','Calypso','Penelope'],a:0},
      {q:'Who is the god of the sea?',opts:['Poseidon','Helios','Hermes'],a:0},
      {q:'Who is the goddess / enchantress?',opts:['Circe','Penelope','Eurycleia'],a:0},
      {q:'Which creatures lure sailors with their voices?',opts:['Sirens','Cyclopes','Suitors'],a:0},
      {q:'Who are the sea threats?',opts:['Scylla and Charybdis','Athena and Hermes','Penelope and Telemachus'],a:0}]},
    {type:'words',words:[['wrath','盛怒'],['prophecy','預言'],['disguise','偽裝'],['loyalty','忠誠'],['vengeance','復仇']]}
  ]}
];
