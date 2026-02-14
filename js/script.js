let selectedMood = "funny";
let selectedLength = "short";
let selectedLang = "en";

/* ================= CAPTION DATABASE ================= */

const captionsDB = {
  en: {
    funny: [
      "Life is better when you're laughing 😂",
      "Smiling through everything ✨",
      "If stress burned calories, I'd be a supermodel 😎",
      "I dont rise and shine. I caffeinate and pray ☕",
      "I dont rise and shine. I caffeinate and pray ☕",
      "Running on 2% battery and pure delusion 🔋",
      "I came. I saw. I made it awkward 😭",
      "I put the pro in procrastinate 🫠",
      "My brain has 87 tabs open 🧠",
      "I dont need a GPS, I need life directions 🧭",
      "I am not lazy, I am energy efficient 🔋",
      "I dont sweat. I sparkle under pressure ✨",
      "Gym? I thought you said gin 🍸",
      "I speak fluent sarcasm 😎",
      "My hobbies include overthinking and snacks 🍟",
      "Life update: still confused but vibing ✨",
      "I dont chase dreams, I hit snooze 😴",
      "I didnt fail, I just found 100 ways not to do it 💀",
      "I act normal but I am actually dramatic 😭",
      "If laziness were a sport, I would almost win 🥈",
      "I dont trip, I test gravity 🤦",
      "I need six months of vacation twice a year 🏖️",
      "I am not short, I am fun sized 😌",
      "Currently pretending I know what I am doing 🤡",
      "I laugh at my own jokes because someone has to 😂",
      "Sleep is my toxic relationship 😴",
      "I am not weird, I am limited edition 😏",
      "I have a PhD in Googling things 🎓",
      "I didnt choose the meme life, it chose me 😎",
      "Confidence level: bad decisions 😭",
      "My life feels like a group project I didnt sign up for 📚",
      "I dont need therapy, I need WiFi 📶",
      "I am not dramatic, I just react passionately 💅",
      "I was cool… then life happened 🤧",
      "I am 90% coffee and 10% chaos ☕",
      "I dont argue, I explain loudly 🗣️",
      "I dont have attitude, I have standards 😎",
      "I wake up with good intentions and bad ideas 💀",
      "I dont need luck, I need snacks 🍕",
      "I am not clumsy, the floor just loves me 🤦‍♂️",
      "Reality called… I declined ☎️",
      "I am not bossy, I just have better ideas 🤷",
      "I didnt change, I just grew up slightly 😌",
      "I dont need a filter, I need sleep 😴",
      "I am allergic to mornings 🌅",
      "I dont need a six pack, I need six pizzas 🍕",
      "I am not extra, I am just more than necessary 💅",
      "I try to be mature but then I remember memes 😭",
      "I dont chase people, I trip accidentally 💀",
      "My brain: lets overthink everything 🤓",
      "I am not ignoring you, I am prioritizing peace 🧘",
      "I didnt come this far to only come this far 🤡",
      "I have two moods: hungry and hungrier 🍔",
      "I dont do revenge, I do screenshots 📱",
      "I didnt fail the test, the test failed me 📄",
      "I dont sweat, I leak confidence 😏",
      "My life is basically loading ⏳",
      "I dont grow up, I level up 🎮",
      "I didnt lose, I just didnt win 😭",
      "I dont cry, I just leak emotions 💧",
      "I came to slay but got distracted 💅",
      "I am not stupid, I just test limits 💀",
      "I dont need motivation, I need money 💸",
      "I am not late, I am fashionably delayed ⏰",
      "I dont do stupid things intentionally… mostly 😭",
      "I am not single, I am emotionally unavailable 😌",
      "I dont fall in love, I trip into situations 💀",
      "I didnt oversleep, I under woke 😴",
      "I dont need a plan, I need vibes ✨",
      "I am not moody, I just have layers 🧅",
      "I dont have enemies, just fans in denial 😎",
      "I didnt ghost, I went invisible 👻",
      "I dont need a crown, I need coffee 👑",
      "I didnt start the chaos, I just joined it 😭",
      "I am not lazy, I am on power saving mode 🔋",
      "I dont need drama, Netflix is enough 📺",
      "I didnt mess up, I experimented 💀",
      "I dont need validation, I need vacation 🏖️",
      "I didnt forget, I just remembered later 🤡",
      "I dont have bad luck, I have bad timing ⏳",
      "I didnt overreact, I reacted passionately 😌",
      "I dont follow trends, I create confusion 😎",
      "I didnt lie, I told creative truth 💀",
      "I dont need perfection, I need pizza 🍕",
      "I didnt panic, I aggressively thought 😭",
      "I dont need sleep, I need peace 🧘",
      "I didnt overthink, I ultra thought 🧠",
      "I dont break hearts, I break expectations 💅",
      "I didnt skip leg day, I skipped the gym entirely 😌",
      "I dont run away from problems, I ignore them 💀",
      "I didnt fail, I practiced losing 😭",
      "I dont chase clout, I chase snacks 🍟",
      "I didnt plan this, I just showed up 😎",
      "I dont need a therapist, I need a refund 💸",
      "I didnt argue, I passionately explained 😌",
      "I dont sweat small stuff, I nap through it 😴",
      "I didnt lose motivation, it lost me 🤡",
      "I dont need followers, I need fries 🍟",
      "I didnt change, I upgraded slightly 🔥"
              

    ],
    sad: [
      "Some feelings dont need words 💔",
     "Silence says more than noise. 🤍",
      "Broken but still breathing. 🫀",
      "I am tired but not the kind sleep can fix. 😴",
      "Smiling outside, buffering inside. 🫥",
      "I reply fast but heal slow. 💬",
      "Mentally somewhere else. 🌫️",
      "I am okay, just not today. 🌧️",
      "Feeling everything and nothing at the same time. 🌊",
      "I laugh loud so no one hears the silence. 🎭",
      "I am not cold, I just learned the hard way. 🧊",
      "Too soft for this world. 🥀",
      "Overthinking ruined another good night. 🌙",
      "I disappear when it hurts. 👤",
      "Emotionally on airplane mode. ✈️",
      "I miss the version of me that trusted easily. 🕊️",
      "Not sad, just emotionally drained. 🔋",
      "Some days hit harder than others. 🌩️",
      "I wish I cared less. 💭",
      "I give too much and expect too little. 🫶",
      "Still healing from things I do not talk about. 🩹",
      "Trying to stay strong but I am tired. 🧠",
      "Nobody notices when you slowly give up. 🕯️",
      "I am losing myself quietly. 🌑",
      "Low battery, low energy, low mood. 🔋",
      "I am present but not really here. 🌫️",
      "Some scars do not show. 🩶",
      "I overthink everything and regret nothing. 🌀",
      "I act fine so people stop asking. 🙂",
      "I feel everything too deeply. 🌊",
      "Peace feels unfamiliar now. 🕊️",
      "I wish I could pause life. ⏸️",
      "I am not dramatic, I am just overwhelmed. 🌪️",
      "Too attached, too fast, too hurt. 💔",
      "I stopped explaining myself. 🚪",
      "I am not the same anymore. 🔄",
      "Emotionally unavailable but still feeling everything. 🖤",
      "I trust less now. 🔒",
      "Silence feels safer. 🤐",
      "I needed support, not lessons. 🫂",
      "I detach before it destroys me. 🧊",
      "I pretend I do not care. 🎭",
      "I lost interest in things I once loved. 🌒",
      "I am healing but it still hurts. 🩹",
      "Sometimes I just want to disappear. 🌫️",
      "I think too much before I sleep. 🌙",
      "I am tired of being strong. 🏋️",
      "I give energy I do not have. 🔋",
      "I feel alone even in crowds. 🧍",
      "I stopped expecting. 📉",
      "I am learning to let go quietly. 🍂",
      "I wish things did not change. 🕰️",
      "I miss how things used to feel. 📷",
      "I am surviving, not living. 🫀",
      "My heart feels heavy today. 🖤",
      "I keep everything inside. 🔐",
      "I overgive and under receive. ⚖️",
      "I do not talk about it anymore. 🤫",
      "I am not heartless, just careful now. 🧊",
      "I smile so nobody asks. 🙂",
      "I feel like a background character in my own life. 🎬",
      "I stopped chasing, I started withdrawing. 🚶",
      "I want peace more than people. 🕊️"

    ],
    attitude: [
      "I don’t compete, I dominate 🔥",
      "Built different. 🔥👑",
      "Legends do not chase, they attract. 🧲👑",
      "I am not arrogant, I am just aware of my worth. 💎🖤",
      "I do not compete, I elevate. 🚀📈",
      "Energy unmatched, effort optional. ⚡♟️",
      "I am the vibe you cannot replace. 🌊💎",
      "Built different, moving different. 🧠🔥",
      "I am not lucky, I am intentional. 🎯💰",
      "Silence is better than explaining myself. 🤫♠️",
      "I do not chase, I attract. 🧲✨",
      "Confidence louder than opinions. 🔥🎙️",
      "I know my value, I just do not announce it. 💎🔒",
      "Respectfully, I am on another level. 📈👑",
      "I am not for everyone and that is fine. 🖤🚫",
      "I move in silence and let success talk. 🤫🏆",
      "Not cold, just selective. ❄️💎",
      "I outgrew what I once begged for. 🌱🔥",
      "I do not fold under pressure. 💪⚡",
      "I am not trying to fit in, I stand out naturally. ✨👑",
      "High standards, low tolerance. 🚫📏",
      "I upgrade, I do not downgrade. ⬆️💰",
      "Main character energy only. 🎬👑",
      "I am not perfect, just premium. 💳💎",
      "I do not need validation. 🚫🖤",
      "Less talking, more leveling up. 📊🔥",
      "I am not rude, I am real. 🧊⚔️",
      "I stay solid, no matter the situation. 🪨👑",
      "I do not respond to disrespect. 🚪⚠️",
      "I am calm, not weak. 🧘🔥",
      "I do not lose, I learn. 📚💪",
      "I am rare, not regular. 🦅💎",
      "I know who I am and that scares some people. 😎♠️",
      "I do not beg, I replace. 🔄👑",
      "I am not dramatic, I just know boundaries. 📏⚡",
      "I move smart, not loud. 🧠♟️",
      "I do not follow trends, I set them. 🏁🔥",
      "I am focused, not available. 📵💼",
      "I do not settle, I select. 🎯💎",
      "I am not extra, I am essential. 💼👑",
      "I protect my peace aggressively. 🛡️🖤",
      "I am not ignoring you, I am prioritizing me. 🧘💎",
      "I do not compete for attention. 🎭🚫",
      "I am built from lessons, not losses. 🏗️🔥",
      "I do not explain my moves. ♟️🤫",
      "I am not insecure, I am self aware. 🔍💎",
      "I am proof that growth is silent. 🌒👑",
      "I do not react, I observe. 👀♠️",
      "I walk away without warning. 🚶🔥",
      "I am not toxic, I just stopped tolerating nonsense. 🚫⚔️",
      "I do not need approval. ✔️💎",
      "I calm down, I do not back down. 🧊🔥",
      "I am too real to fake anything. 🎭⚡",
      "I know when to leave. 🚪👑",
      "I am lowkey unstoppable. 🔥♠️",
      "I do not entertain disrespect. 🚫👑",
      "I am not lucky, I worked for this. 🛠️💰",
      "I am not available for low effort energy. ⚠️💎",
      "I do not beg for loyalty. 🧲🖤",
      "I am focused on bigger things. 🏔️👑",
      "I outgrow people quietly. 🌿🤫",
      "I do not argue, I detach. 🔌♠️",
      "I am self made energy. ⚡💼",
      "I am not chasing clout. 🎥🚫",
      "I am calm but not to be tested. ⚠️🔥",
      "I stay rare, never regular. 💎👑",
      "I do not downgrade my standards. 📏💰",
      "I am too busy improving. 📈🔥",
      "I am not bitter, I am better. 🥇👑",
      "I move different when I know my worth. 💎⚡",
      "I am not playing small anymore. 🎯🔥",
      "I let results speak. 🗣️🏆",
      "I do not break, I build. 🏗️👑",
      "I stay consistent, not loud. 🔒📈",
      "I do not seek attention. 👁️🚫",
      "I know my power. ⚡👑",
      "I am not here to impress anyone. 🚫💎",
      "I keep my circle tight. 🔐🖤",
      "I do not compete with noise. 🔕♠️",
      "I know when to walk away. 🚶👑",
      "I am not for everybody. 🖤🔥",
      "I grow, I glow, I go. ✨👑"


    ],
    romantic: [
      "You are my peace ❤️",
     "Love louder. ❤️🔊",
      "With you, everything feels right. 🤍✨",
      "You look better when you are mine. 😌💞",
      "I smile harder when you text me. 😊📱",
      "You are kind of my favorite problem. 😉🔥",
      "I blame you for my constant smiling. 😅💗",
      "You are my favorite distraction. 😏💫",
      "Stop being cute, it is distracting. 🫣💖",
      "I like you more than I planned to. 🤭❤️",
      "You make my heart act stupid. 😵‍💫💓",
      "I pretend to be cool but then you show up. 😎➡️😳",
      "You are dangerously attractive. 🔥😍",
      "I am not obsessed, just interested aggressively. 😌🫶",
      "You make flirting feel effortless. 😉✨",
      "I like the way you look at me. 👀💘",
      "You are my type and my weakness. 🫠❤️",
      "I was fine until you happened. 💭💓",
      "You have no idea what you do to me. 😶‍🌫️💞",
      "You make my heart skip WiFi. 📶💓",
      "I like the way you exist. 🤍🌙",
      "You are the plot twist I wanted. 📖💘",
      "I would risk it all for your smile. 😊🔥",
      "You are illegally attractive. 🚨😍",
      "You are my favorite notification. 📱💖",
      "You make eye contact feel illegal. 👀⚡",
      "I like you more than my alone time. 🫣💗",
      "You are my favorite what if. 💭💞",
      "I get shy but only around you. 😳❤️",
      "You make butterflies look dramatic. 🦋💓",
      "I do not fall fast, but you changed that. 🫠💘",
      "You make my standards nervous. 😏📈",
      "I want to be your favorite hello. 👋❤️",
      "You look good in my future. 🔮💑",
      "I was not ready for you. 😮‍💨💓",
      "You are the reason I check my phone. 📱😊",
      "You are kind of addictive. 🔥💞",
      "I want your hoodie and your heart. 🧥❤️",
      "You make my playlist make sense. 🎧💘",
      "I would flirt with you forever. 😉♾️",
      "You make it hard to act normal. 😳✨",
      "I like you more than I admit. 🤭💓",
      "You make my heart talk too much. 💬❤️",
      "You are my favorite mistake. 😏💔",
      "I am lowkey obsessed. 🫣💘",
      "You make love look tempting. 🔥❤️",
      "You make my confidence blush. 😌🌹",
      "You are the reason I look at my screen smiling. 📱😊",
      "You make silence romantic. 🤍🌙",
      "You are my favorite risk. 🎲❤️",
      "I do not chase but for you I might jog. 🏃💘",
      "You are my weakness in human form. 😩❤️",
      "You make my heart behave badly. 😈💓",
      "I want to sit next to you forever. 🫶✨",
      "You make me forget how to act cool. 😎➡️😳",
      "You are dangerously close to my heart. ❤️🔥",
      "I like the way you make me nervous. 😳💞",
      "You make love feel playful. 💕🎈",
      "I was not looking but I found you. 🔍❤️",
      "You are my favorite late night thought. 🌙💓",
      "You make flirting feel natural. 😉✨",
      "I want you and only you. ❤️🔒",
      "You are my kind of trouble. 😏🔥"


    ],
    motivational: [
      "Dream big. Work bigger 💪",
      "Discipline beats motivation. 🧠🔥",
"Small steps daily = big results. 📈🚀",
"No excuses. Just execution. ⚔️🔥",
"I do not need motivation. I need results. 🎯💪",
"Soft life is not my goal. 🛑🔥",
"I outwork everyone quietly. 🤫🏆",
"Discipline is my personality. 🧠💯",
"I am not tired. I am building. 🏗️🔥",
"While they sleep, I upgrade. 🌙📈",
"Comfort is the enemy. 🚫🛋️",
"I do not complain. I adapt. 🧠⚡",
"Pressure sharpens me. 💎🔥",
"I do not chase hype. I chase mastery. 🎯👑",
"Rest later. Grind now. ⏳🔥",
"Emotion does not control me. Mission does. 🎯🧊",
"I move like I have something to prove. 🚀🔥",
"Average is not an option. 🚫📉",
"I build in silence and strike loud. 🤫⚡",
"I do not fold. I dominate. 👑🔥",
"Hunger separates me from them. 🦁🔥",
"I do not need luck. I need consistency. 📈💪",
"I turn pain into performance. 🔥🏆",
"No mercy for my old self. ⚔️🧱",
"I am at war with my limits. 🥊🔥",
"I upgrade daily. 📈💎",
"I do not wait for opportunity. I create it. 🏗️🚀",
"Excuses are weak energy. 🚫⚡",
"I train my mind harder than my body. 🧠💪",
"I do not need validation. I need victory. 🏆🔥",
"I move different because I think different. 🧠♟️",
"Failure is feedback. 📚🔥",
"I do not stop when I am tired. I stop when I win. 🏁👑",
"I do not compete. I conquer. ⚔️🔥",
"I build discipline when nobody is watching. 🌙💯",
"I do not break under pressure. 💎💪",
"Silence. Strategy. Success. 🤫♟️🏆",
"I sacrifice now so I never beg later. 🔥👑",
"I stay dangerous. ⚠️🔥",
"I am allergic to average. 🚫📉",
"I execute without emotion. 🧊⚔️",
"Results over feelings. 📊🔥",
"I do not seek comfort. I seek growth. 🌱🚀",
"Relentless by choice. 🔥💪",
"I sharpen my edge daily. ⚔️📈",
"I do not need applause. 🤫👑",
"I stay locked in. 🔒🔥",
"I do not fear hard work. 💪⚡",
"Built through struggle. 🧱🔥",
"I control my narrative. 🎬👑",
"I do not talk. I perform. 🎯🔥",
"I train like I am already behind. ⏳💪",
"Cold mind. Focused mission. 🧊🎯",
"I am not here to participate. 🚫🎯",
"I am here to dominate. 👑🔥",
"Pain is temporary. Weakness is permanent. 🧠⚡",
"I earn every win. 🏆🔥",
"I move with intent. 🎯💎",
"Uncomfortable is my comfort zone. 🔥📈",
"I eliminate distractions. 🚫📵",
"I operate at a different frequency. 📡🔥",
"I am not lucky. I am relentless. 💪🔥",
"I rise without permission. 🚀👑"



    ]
  },
  hi: {
    funny: [
      "Life choti hai, haste raho 😂",
      "Smile karo aur tension bhool jao ✨",
      "Main rise and shine nahi karta, main caffeinate and survive karta hoon ☕",
      "Battery 2% pe hai aur confidence 200% 🔋",
      "Main aya, maine dekha, maine awkward bana diya 😭",
      "Procrastinate karna mera hidden talent hai 🫠",
      "Mera dimaag 87 tabs khol ke baitha hai 🧠",
      "Mujhe GPS nahi, life direction chahiye 🧭",
      "Main lazy nahi hoon, main energy efficient hoon 🔋",
      "Main sweat nahi karta, main sparkle karta hoon ✨",
      "Gym ka naam sunte hi neend aa jati hai 😴",
      "Main fluent sarcasm bolta hoon 😎",
      "Mere hobbies: overthinking aur snacks 🍟",
      "Life update: confused hoon par vibing chal raha hai ✨",
      "Main dreams chase nahi karta, main snooze karta hoon 😴",
      "Main fail nahi hua, bas 100 tareeke try kiye 💀",
      "Main normal act karta hoon par main dramatic hoon 😭",
      "Agar laziness sport hota to main almost jeet jata 🥈",
      "Main girta nahi, gravity test karta hoon 🤦",
      "Mujhe saal me do baar 6 mahine ki chhutti chahiye 🏖️",
      "Main short nahi hoon, main fun sized hoon 😌",
      "Main pretend karta hoon ki sab control me hai 🤡",
      "Main apne jokes pe khud hasta hoon kyunki main funny hoon 😂",
      "Neend meri toxic relationship hai 😴",
      "Main weird nahi hoon, main limited edition hoon 😏",
      "Maine Google se PhD ki hai 🎓",
      "Maine meme life choose nahi ki, meme life ne mujhe choose kiya 😎",
      "Confidence level: bina soche decision lena 😭",
      "Meri life group project jaisi hai jisme main hi kaam kar raha hoon 📚",
      "Mujhe therapy nahi, WiFi chahiye 📶",
      "Main dramatic nahi hoon, main expressive hoon 💅",
      "Main pehle cool tha, phir life ne entry maari 🤧",
      "Main 90% coffee aur 10% chaos hoon ☕",
      "Main argue nahi karta, main loud explain karta hoon 🗣️",
      "Mera attitude nahi hai, mere standards high hai 😎",
      "Main subah good intentions ke saath uthta hoon aur bad ideas ke saath sota hoon 💀",
      "Mujhe luck nahi, snacks chahiye 🍕",
      "Main clumsy nahi hoon, zameen mujhse pyaar karti hai 🤦‍♂️",
      "Reality ne call kiya, maine cut kar diya ☎️",
      "Main bossy nahi hoon, bas ideas better hai 🤷",
      "Main change nahi hua, bas thoda upgrade hua hoon 😌",
      "Mujhe filter nahi, sleep chahiye 😴",
      "Mujhe mornings se allergy hai 🌅",
      "Six pack nahi chahiye, six pizza chahiye 🍕",
      "Main extra nahi hoon, main premium hoon 💅",
      "Main mature banne ki koshish karta hoon phir meme dekh leta hoon 😭",
      "Main logon ko chase nahi karta, bas slip ho jata hoon 💀",
      "Mera brain bolta hai chalo overthink karte hain 🤓",
      "Main ignore nahi karta, main peace choose karta hoon 🧘",
      "Main yahan tak aaya hoon aur ab confuse hoon 🤡",
      "Mere do moods hai: bhook aur zyada bhook 🍔",
      "Main revenge nahi leta, main screenshot leta hoon 📱",
      "Main test me fail nahi hua, test mujhme fail hua 📄",
      "Main sweat nahi karta, confidence leak karta hoon 😏",
      "Meri life loading screen jaisi hai ⏳",
      "Main grow up nahi karta, level up karta hoon 🎮",
      "Main haara nahi, bas jeeta nahi 😭",
      "Main rota nahi, bas emotional ho jata hoon 💧",
      "Main slay karne aya tha par distract ho gaya 💅",
      "Main stupid nahi hoon, bas limits test karta hoon 💀",
      "Mujhe motivation nahi, paisa chahiye 💸",
      "Main late nahi hoon, fashionably delayed hoon ⏰",
      "Main stupid kaam intentionally nahi karta… mostly 😭",
      "Main single nahi hoon, main emotionally unavailable hoon 😌",
      "Main love me nahi girta, situation me gir jata hoon 💀",
      "Main oversleep nahi karta, main under wake karta hoon 😴",
      "Mujhe plan nahi, vibes chahiye ✨",
      "Main moody nahi hoon, bas layers hai 🧅",
      "Mere enemies nahi hai, sirf jealous fans hai 😎",
      "Main ghost nahi hua, invisible ho gaya 👻",
      "Mujhe crown nahi, coffee chahiye 👑",
      "Maine chaos start nahi kiya, bas join kiya 😭",
      "Main lazy nahi hoon, main power saving mode me hoon 🔋",
      "Mujhe drama nahi, Netflix chahiye 📺",
      "Main mess up nahi karta, experiment karta hoon 💀",
      "Mujhe validation nahi, vacation chahiye 🏖️",
      "Main bhoola nahi, bas late yaad aaya 🤡",
      "Meri luck kharab nahi, timing kharab hai ⏳",
      "Main overreact nahi karta, main passionate ho jata hoon 😌",
      "Main trends follow nahi karta, confusion create karta hoon 😎",
      "Main jhoot nahi bolta, creative truth bolta hoon 💀",
      "Mujhe perfection nahi, pizza chahiye 🍕",
      "Main panic nahi karta, aggressively sochta hoon 😭",
      "Mujhe sleep nahi, peace chahiye 🧘",
      "Main overthink nahi karta, ultra think karta hoon 🧠",
      "Main dil nahi todta, expectations todta hoon 💅",
      "Main leg day skip nahi karta, main gym skip karta hoon 😌",
      "Main problems se nahi bhagta, ignore karta hoon 💀",
      "Main fail nahi hua, practice kar raha tha 😭",
      "Main clout chase nahi karta, snacks chase karta hoon 🍟",
      "Maine plan nahi kiya, bas entry maar di 😎",
      "Mujhe therapist nahi, refund chahiye 💸",
      "Main argue nahi karta, passionate explain karta hoon 😌",
      "Main choti baaton pe stress nahi leta, nap le leta hoon 😴",
      "Meri motivation mujhe chhod ke chali gayi 🤡",
      "Mujhe followers nahi, fries chahiye 🍟",
      "Main change nahi hua, bas thoda sa upgrade ho gaya 🔥"

    ],
    sad: [
      "Kuch feelings lafzon se pare hoti hain 💔",
     "Chup rehna bhi ek jawab hai. 🤐",
"Main thak gaya hoon, par yeh wali thakan neend se theek nahi hoti. 😴🖤",
"Bahar se smile, andar se buffering. 🙂⏳",
"Reply fast karta hoon, heal slow karta hoon. 💬🩹",
"Mentally kahin aur hoon. 🌫️",
"Main theek hoon, bas aaj nahi. 🌧️",
"Sab feel karta hoon, par kuch feel nahi hota. 🌊🫥",
"Zor se hasta hoon taaki silence chup jaye. 🎭🤍",
"Main cold nahi hoon, bas seekh gaya hoon. 🧊",
"Yeh duniya ke liye main zyada soft hoon. 🥀",
"Overthinking ne phir ek raat kharab kar di. 🌙🌀",
"Dard hota hai to main chup ho jata hoon. 🤐💔",
"Emotionally airplane mode pe hoon. ✈️📴",
"Mujhe apna purana version yaad aata hai. 🕰️",
"Sad nahi hoon, bas emotionally drained hoon. 🔋",
"Kuch din zyada heavy lagte hain. 🌧️",
"Kash main kam care karta. 💭",
"Main zyada deta hoon, kam expect karta hoon. 🫶",
"Jo dard hai uske baare me baat nahi karta. 🤫💔",
"Strong rehne ki koshish karta hoon par thak gaya hoon. 🧠",
"Koi notice nahi karta jab tum dheere dheere give up karte ho. 🕯️",
"Main khud ko dheere dheere kho raha hoon. 🌒",
"Low battery, low energy, low mood. 🔋🌫️",
"Main yahan hoon par fully present nahi. 👤",
"Kuch scars dikhte nahi. 🩶",
"Har cheez overthink karta hoon. 🌀",
"Main fine act karta hoon taaki log poochna band kare. 🙂",
"Main sab kuch deeply feel karta hoon. 🌊",
"Peace ab unfamiliar lagti hai. 🕊️",
"Kash life pause kar sakta. ⏸️",
"Main dramatic nahi hoon, bas overwhelmed hoon. 🌪️",
"Main jaldi attach hota hoon aur jaldi hurt hota hoon. 💔",
"Main explain karna band kar diya hoon. 🚪",
"Main pehle jaisa nahi raha. 🔄",
"Emotionally unavailable hoon par sab feel karta hoon. 🖤",
"Ab trust kam karta hoon. 🔒",
"Silence ab safe lagta hai. 🤍",
"Mujhe support chahiye tha, lecture nahi. 🫂",
"Main detach ho jata hoon pehle hi. 🧊",
"Main pretend karta hoon ki mujhe farak nahi padta. 🎭",
"Jo cheezein pasand thi unme interest khatam ho gaya. 🌒",
"Healing chal rahi hai par dard bhi hai. 🩹",
"Kabhi kabhi bas gayab ho jana chahta hoon. 🌫️",
"Sone se pehle hazaar cheezein sochta hoon. 🌙",
"Strong reh reh ke thak gaya hoon. 🏋️",
"Energy nahi hai par dena padta hai. 🔋",
"Logon ke beech me bhi akela feel hota hai. 🧍",
"Expect karna band kar diya. 📉",
"Chup chaap let go kar raha hoon. 🍂",
"Cheezein pehle jaisi nahi rahi. 🕰️",
"Woh feeling miss karta hoon jo pehle thi. 📷",
"Main survive kar raha hoon, live nahi. 🫀",
"Aaj dil heavy lag raha hai. 🖤",
"Sab kuch andar hi rakhta hoon. 🔐",
"Main zyada deta hoon, kam milta hai. ⚖️",
"Ab us baare me baat nahi karta. 🤫",
"Main heartless nahi hoon, bas careful hoon. 🧊",
"Smile karta hoon taaki koi pooche nahi. 🙂",
"Apni life me hi background character jaisa feel hota hoon. 🎬",
"Chase karna band kiya, withdraw karna start kiya. 🚶",
"Mujhe logon se zyada peace chahiye. 🕊️"


    ],
    attitude: [
      "Competition nahi, domination karta hoon 🔥",
      "Alag level pe hoon. 👑🔥",
"Main arrogant nahi hoon, bas apni value jaanta hoon. 💎🖤",
"Main compete nahi karta, main elevate karta hoon. 🚀📈",
"Meri energy unmatched hai. ⚡🔥",
"Main woh vibe hoon jo replace nahi hoti. 🌊💎",
"Built different, move different. 🧠🔥",
"Main lucky nahi hoon, main intentional hoon. 🎯💰",
"Har cheez explain karna zaroori nahi hota. 🤫♠️",
"Main chase nahi karta, attract karta hoon. 🧲✨",
"Confidence mera default setting hai. 💪🔥",
"Main apni value announce nahi karta. 🔒💎",
"Respectfully, main alag level pe hoon. 👑📈",
"Main sabke liye nahi bana. 🖤🚫",
"Main silence me grow karta hoon. 🤫🌱",
"Main cold nahi hoon, bas selective hoon. ❄️💎",
"Jo maanga tha, usse outgrow kar chuka hoon. 🌿🔥",
"Pressure me fold nahi hota. 💪⚡",
"Fit in karne ki zaroorat nahi, main stand out karta hoon. ✨👑",
"Standards high, tolerance low. 📏🚫",
"Main upgrade karta hoon, downgrade nahi. ⬆️💰",
"Pure main character energy. 🎬👑",
"Perfect nahi, premium hoon. 💳💎",
"Mujhe validation ki zaroorat nahi. 🚫✔️",
"Kam bolta hoon, zyada level up karta hoon. 📈🔥",
"Main rude nahi hoon, main real hoon. 🧊⚔️",
"Situation koi bhi ho, main solid hoon. 🪨👑",
"Disrespect tolerate nahi karta. 🚫⚠️",
"Main calm hoon, weak nahi. 🧘🔥",
"Main haarta nahi, seekhta hoon. 📚💪",
"Main rare hoon, regular nahi. 🦅💎",
"Main jaanta hoon main kaun hoon. 🔥👑",
"Main beg nahi karta, replace karta hoon. 🔄⚡",
"Boundaries clear rakhta hoon. 📏🛡️",
"Main loud nahi, smart move karta hoon. 🧠♟️",
"Main trends follow nahi karta, set karta hoon. 🏁🔥",
"Main focused hoon, available nahi. 📵💼",
"Main settle nahi karta, select karta hoon. 🎯💎",
"Main extra nahi, essential hoon. 💼👑",
"Apni peace protect karta hoon. 🛡️🖤",
"Main ignore nahi kar raha, prioritize kar raha hoon. 🧘📌",
"Main attention ke liye compete nahi karta. 🚫🎭",
"Main lessons se bana hoon, losses se nahi. 🏗️🔥",
"Main apne moves explain nahi karta. ♟️🤫",
"Insecure nahi hoon, self aware hoon. 🔍💎",
"Growth silent hoti hai. 🌒📈",
"React nahi karta, observe karta hoon. 👀♠️",
"Main bina warning ke walk away karta hoon. 🚶🔥",
"Toxic nahi hoon, bas nonsense tolerate nahi karta. 🚫⚔️",
"Mujhe approval ki zaroorat nahi. ✔️👑",
"Main calm rehta hoon par peeche nahi hatta. 🧊🔥",
"Fake energy se door rehta hoon. 🚫🖤",
"Mujhe pata hai kab leave karna hai. 🚪👑",
"Lowkey unstoppable hoon. 🔥⚡",
"Disrespect entertain nahi karta. 🚫👑",
"Main lucky nahi, hardworking hoon. 🛠️💪",
"Low effort energy accept nahi karta. ⚠️💎",
"Loyalty ke liye beg nahi karta. 🧲🖤",
"Main bigger goals pe focused hoon. 🏔️🔥",
"Logon ko quietly outgrow karta hoon. 🌿🤫",
"Main argue nahi karta, detach karta hoon. 🔌♠️",
"Self made mindset. 💼🔥",
"Clout chase nahi karta. 🎥🚫",
"Calm hoon par test mat karna. ⚠️🔥"


    ],
    romantic: [
      "Tu meri sukoon hai ❤️",
      "Pyaar loud hona chahiye. ❤️🔊",
"Tu jab smile karta hai na, mera system hang ho jata hai. 😵‍💫💓",
"Main cool banne ki koshish karta hoon, phir tu aa jata hai. 😎➡️😳",
"Tu meri favorite distraction hai. 😉💫",
"Main obsessed nahi hoon, bas thoda zyada interested hoon. 😌💘",
"Tere text se mood automatically upgrade ho jata hai. 📱✨",
"Tu meri type bhi hai aur weakness bhi. 🫠❤️",
"Tu dangerously attractive hai. 🔥😍",
"Main fast nahi girta, par tu exception hai. 💘⚡",
"Tu mera favorite notification hai. 📲💖",
"Tujhe dekh ke acting normal mushkil ho jata hai. 😳✨",
"Tu meri future me achha lagta hai. 🔮💑",
"Main chase nahi karta, par tere liye thoda jog kar sakta hoon. 🏃💞",
"Tu meri hoodie bhi le le aur dil bhi. 🧥❤️",
"Tu meri playlist ko meaning deta hai. 🎧💘",
"Tu meri what if nahi, what now hai. 💭💓",
"Tu meri late night thought hai. 🌙💗",
"Tere saamne confidence bhi blush karta hai. 😌🌹",
"Main calm tha, phir tu mila. 🧘➡️💓",
"Tu meri illegally cute problem hai. 🚨😍",
"Tujhe dekh ke butterflies bhi overreact karte hain. 🦋💞",
"Tu meri favorite risk hai. 🎲❤️",
"Main lowkey tere pe highkey fida hoon. 😏💘",
"Tu meri weakness in human form hai. 😩💓",
"Tu meri smile ka reason hai. 😊❤️",
"Main admit nahi karta, par mujhe tu pasand hai. 🤭💗",
"Tere saath flirting effortless lagti hai. 😉✨",
"Tu meri perfect plot twist hai. 📖💘",
"Tu mera favorite hello ban sakta hai. 👋❤️",
"Tere bina screen boring lagti hai. 📱🥺",
"Tu meri daily dose of cute hai. 💖🌸",
"Main normal rehta hoon, bas tere saamne nahi. 😳💞",
"Tu meri kind of trouble hai. 😈❤️",
"Tujhe dekh ke heart behave nahi karta. 💓😵",
"Tu meri comfort bhi hai aur chaos bhi. 💞🔥",
"Main act tough karta hoon par tu weakness hai. 😎➡️❤️",
"Tu meri heart ki soft corner hai. 🤍💘",
"Main nahi dekh raha tha par tu mil gaya. 🔍❤️",
"Tu meri shyness ka reason hai. 😳💓",
"Tu meri safe crush hai. 🫶💗",
"Main thoda sa tere pe addicted hoon. 🔥💘",
"Tu meri silent smile hai. 😊🤍",
"Tu meri story ka best part hai. 📖❤️",
"Main deny karta hoon par dil nahi manta. 🫠💓",
"Tu meri vibe match karta hai. ✨💞",
"Tujhe dekh ke time slow lagta hai. ⏳❤️",
"Tu meri cute si problem hai. 😏💖",
"Main distant ho sakta hoon par tere liye nahi. 💭💘",
"Tu meri romantic glitch hai. 💻❤️",
"Tu meri eye contact ka disaster hai. 👀⚡",
"Main flirt nahi karta, bas tere saath karta hoon. 😉💗",
"Tu meri serious wali distraction hai. 😌💫",
"Tu meri future ka spoiler hai. 🔮❤️",
"Tere bina mood incomplete lagta hai. 🫶💓",
"Tu meri smile ka shortcut hai. 😊⚡",
"Main pretend karta hoon par farak padta hai. 🤭❤️",
"Tu meri soft addiction hai. 💖🔥",
"Tu meri overthinking ka favorite topic hai. 🌀💘",
"Tu meri heart ki permanent notification hai. 📲❤️",
"Main tough hoon par tere saamne melt ho jata hoon. 🧊➡️💞",
"Tu meri forever wali feeling hai. ♾️❤️"


    ],
    motivational: [
      "Sapne bade rakho 💪",
"Mehnat hi asli power hai. 💪🔥",
"Main shor nahi karta, main history likhta hoon. 📖👑",
"Andhera mujhe darata nahi, shape karta hai. 🌑🔥",
"Main toot kar bhi aur sharp hua hoon. ⚔️💎",
"Log mujhe underestimate karte hain, main unhe surprise karta hoon. 😎⚡",
"Main silent rehta hoon par plan loud hota hai. 🤫♟️",
"Main fail nahi hota, main evolve hota hoon. 🔄🔥",
"Main dard ko fuel banata hoon. 🔥⛽",
"Main badla nahi leta, main better ban jata hoon. 📈👑",
"Main girta hoon par rukta nahi. 🚶🔥",
"Main emotional nahi, strategic hoon. 🧠♟️",
"Main har loss ko lesson banata hoon. 📚💪",
"Main slow ho sakta hoon, par unstoppable hoon. 🐢🔥",
"Main wait nahi karta, main prepare karta hoon. 🎯⚔️",
"Main chup rehta hoon par yaad sab rakhta hoon. 🤫🧠",
"Main respect demand nahi karta, earn karta hoon. 🏆👑",
"Main duniya se nahi, khud se compete karta hoon. 🪞🔥",
"Main weak dikh sakta hoon par break nahi hota. 💎💪",
"Main patience se war jeetta hoon. ⏳⚔️",
"Main silent storm hoon. 🌪️🔥",
"Main apni kahani khud likhta hoon. ✍️👑",
"Main underdog nahi, upcoming hoon. 🚀🔥",
"Main ego se nahi, execution se jeetta hoon. 🎯⚡",
"Main fake smile nahi karta. 😐🖤",
"Main apni energy waste nahi karta. ⚡🚫",
"Main villain nahi, evolved version hoon. 😈📈",
"Main calm hoon par careless nahi. 🧊⚔️",
"Main hurt hua tha, ab hungry hoon. 🩸🔥",
"Main ignore karta hoon par bhoolta nahi. 🤫🧠",
"Main sab sunta hoon par kam bolta hoon. 👂🤐",
"Main fall ke baad aur dangerous ho jata hoon. ⚔️🔥"


    ]
  }
};


/*-------------------LONG EXTENSIONS-------------*/

const longExtensions = {
  en: {
    funny: [
      " Life is not that serious, chill a little 😎",
      " Just here for vibes and chaos 😂",
      " If nothing makes sense, laugh anyway 🤷‍♂️",
      " Overthinking but make it funny 🤡",
      " I am the joke and the punchline 🎭",
      " Zero logic, full entertainment 🎉",
      " Chaos but make it aesthetic ✨",
      " Living rent free in my own delusion 😌",
      " Professional overreactor certified 🎬",
      " Plot twist: I survived again 😭",
      " Mentally in airplane mode ✈️",
      " Smiling through the nonsense 😁",
      " Reality buffering... please wait ⏳",
      " Laughing because crying is expensive 💀",
      " Comedy is my coping mechanism 🎤"
    ],

    sad: [
      " Some battles are silent 🖤",
      " Healing is not linear 🌧️",
      " I am learning to sit with the pain 🥀",
      " Not everything broken is visible 💔",
      " Some days feel heavier than others 🌫️",
      " Smiling but emotionally tired 😔",
      " Peace feels far lately 🌙",
      " I disappear when it hurts 🌊",
      " Still healing, still breathing 🌿",
      " Quietly falling apart 🕊️",
      " Some scars speak without words 🩶",
      " Energy low, thoughts loud 🧠",
      " Pretending is exhausting 😶",
      " Feelings I cannot explain 🌑",
      " Just surviving, not living 🕰️"
    ],

    attitude: [
      " I move different for a reason 😈",
      " Respect is earned, not requested 🧊",
      " I do not explain my power 🔥",
      " Built to dominate quietly 👑",
      " Standards high, tolerance low ⚡",
      " Energy unmatched 💎",
      " Calm but dangerous 🐍",
      " Silent but unstoppable 🚀",
      " I upgrade without announcement 📈",
      " Different breed mentality 🦁",
      " Confidence is natural here 💯",
      " Rare, not regular 🌟",
      " I let results speak 📊",
      " Main character energy only 🎬",
      " No competition detected 🚫"
    ],

    romantic: [
      " You make everything softer 💕",
      " My heart feels safer with you 🫶",
      " You are my favorite chapter 📖",
      " Love feels easy with you 🌷",
      " You changed the way I see everything 🌅",
      " You are my calm in chaos 🌊",
      " My heart recognizes you 💓",
      " You make silence feel warm 🌤️",
      " You are my favorite notification 📱",
      " Everything feels lighter with you ✨",
      " You are my comfort place 🏡",
      " My world slowed down when I met you ⏳",
      " You are the softest part of my life 🌸",
      " I smile differently around you 😊",
      " With you, it feels right 💞"
    ],

    motivational: [
      " Progress over perfection 📈",
      " Discipline creates destiny 🔥",
      " Small effort daily compounds 💪",
      " The grind is personal 🛠️",
      " I am building my future self 🚀",
      " Pressure creates diamonds 💎",
      " Every day is upgrade season ⚙️",
      " Growth requires discomfort 🌱",
      " I choose discipline over excuses 🧠",
      " Hard work never betrays 💼",
      " Pain today, power tomorrow ⚡",
      " I am becoming unstoppable 🦅",
      " Consistency beats motivation 🔁",
      " Built through struggle 🏋️",
      " Dream big, execute bigger 🎯"
    ]
  },

  hi: {
    funny: [
      " Zindagi ko thoda halka lo 😎",
      " Vibes ke liye jee raha hoon 😂",
      " Samajh na aaye to hans lo 🤷",
      " Overthinking bhi funny ho sakti hai 🤡",
      " Main khud hi joke hoon 🎭",
      " Logic zero, entertainment full 🎉",
      " Reality buffer ho rahi hai ⏳",
      " Hansna hi best therapy hai 😁",
      " Life ek meme hai 💀",
      " Mood swing premium version 🎬",
      " Drama free nahi, drama pro hoon 😌",
      " Situation serious, main nahi 😜",
      " Comedy se survive karta hoon 🎤",
      " Thoda pagalpan zaroori hai 🤪",
      " Has ke ignore karo 😅"
    ],

    sad: [
      " Kuch jung chup rehti hain 🖤",
      " Healing seedhi line nahi hoti 🌧️",
      " Dard ke saath jeena seekh raha hoon 🥀",
      " Har tootna dikhai nahi deta 💔",
      " Kuch din zyada bhaari lagte hain 🌫️",
      " Smile karta hoon par andar se thak gaya hoon 😔",
      " Dil heavy feel karta hai 🌑",
      " Chup rehna bhi thakan hoti hai 🕊️",
      " Energy low chal rahi hai 🔋",
      " Sab normal lagta hai par nahi hai 🩶",
      " Dil ko samjha raha hoon 💭",
      " Andar ka noise zyada hai 🧠",
      " Kuch baatein bas mehsoos hoti hain 🌙",
      " Main thoda lost hoon 🌊",
      " Bas survive kar raha hoon 🕰️"
    ],

    attitude: [
      " Main alag move karta hoon 😈",
      " Respect maanga nahi jata 👑",
      " Power explain nahi karta 🔥",
      " Silence me dominate karta hoon 🧊",
      " Standards high, tolerance low ⚡",
      " Energy unmatched hai 💎",
      " Calm hoon par dangerous bhi 🐍",
      " Upgrade quietly karta hoon 📈",
      " Rare hoon, common nahi 🌟",
      " Confidence natural hai 💯",
      " Result khud bolte hain 📊",
      " Main competition nahi maanta 🚫",
      " Main trend set karta hoon 🎬",
      " Main solid hoon 🦁",
      " Level alag hai 🚀"
    ],

    romantic: [
      " Tu sab kuch soft bana deta hai 💕",
      " Tere saath dil safe feel karta hai 🫶",
      " Tu meri favorite story hai 📖",
      " Tere saath pyaar easy lagta hai 🌷",
      " Tune sab kuch change kar diya 🌅",
      " Tu meri calm jagah hai 🌊",
      " Tujhe dekh ke smile aa jati hai 😊",
      " Tu meri comfort zone hai 🏡",
      " Tere saath time slow lagta hai ⏳",
      " Tu meri daily happiness hai ✨",
      " Tu meri heart ki notification hai 📱",
      " Tere bina sab incomplete lagta hai 💞",
      " Tu meri soft corner hai 🌸",
      " Dil tujhe hi choose karta hai 💓",
      " Tu meri best feeling hai 💖"
    ],

    motivational: [
      " Roz thoda better bano 📈",
      " Discipline se destiny banti hai 🔥",
      " Chhoti mehnat daily bada result deti hai 💪",
      " Grind personal hota hai 🛠️",
      " Main apne future ko build kar raha hoon 🚀",
      " Pressure se diamond banta hai 💎",
      " Har din upgrade season hai ⚙️",
      " Growth uncomfortable hoti hai 🌱",
      " Excuse nahi, execution karo 🎯",
      " Mehnat kabhi dhokha nahi deti 💼",
      " Aaj ka pain kal ki power hai ⚡",
      " Consistency sabse bada weapon hai 🔁",
      " Main unstoppable ban raha hoon 🦅",
      " Hard work silent hota hai 🤫",
      " Sapne bade rakho 💫"
    ]
  }
};


/* ================= TRENDING TAGS ================= */

const trendingTags = [
  "#instagood",
  "#reels",
  "#explorepage",
  "#viral",
  "#instagram",
  "#trending",
  "#love",
  "#photooftheday",
  "#instadaily",
  "#fashion"
];

/* ================= MOOD BUTTON ================= */

document.querySelectorAll(".mood").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".mood").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedMood = btn.dataset.mood;
  });
});

/* ================= LENGTH BUTTON ================= */

document.querySelectorAll(".length").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".length").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedLength = btn.dataset.length;
  });
});

/* ================= LANGUAGE TOGGLE ================= */

document.getElementById("enBtn")?.addEventListener("click", () => {
  selectedLang = "en";
  document.getElementById("enBtn").classList.add("active");
  document.getElementById("hiBtn").classList.remove("active");
});

document.getElementById("hiBtn")?.addEventListener("click", () => {
  selectedLang = "hi";
  document.getElementById("hiBtn").classList.add("active");
  document.getElementById("enBtn").classList.remove("active");
});

/* ================= GENERATE CAPTION ================= */

function generateCaption() {

  const list = captionsDB[selectedLang][selectedMood];
  const randomCaption = list[Math.floor(Math.random() * list.length)];

  let caption = randomCaption;

  // 🔥 MOOD BASED LONG EXTENSION
  if (selectedLength === "long") {

    const moodExtensions = longExtensions[selectedLang][selectedMood];

    if (moodExtensions && moodExtensions.length > 0) {
      const randomExtension =
        moodExtensions[
          Math.floor(Math.random() * moodExtensions.length)
        ];

      caption += randomExtension;
    }
  }

  // 🔥 Shuffle hashtags safely
  const shuffledTags = [...trendingTags].sort(() => Math.random() - 0.5);
  const randomTags = shuffledTags.slice(0, 5).join(" ");

  caption += " " + randomTags;

  const result = document.getElementById("result");

  result.innerHTML = `
    <div class="caption-box fade-in">
      ${caption}
      <br>
      <button class="copy-btn">Copy</button>
    </div>
  `;

  attachCopyHandler(caption);
}


/* ================= COPY HANDLER ================= */

function attachCopyHandler(text){

  const copyBtn = document.querySelector(".copy-btn");
  if(!copyBtn) return;

  copyBtn.onclick = function(){

    navigator.clipboard.writeText(text).then(() => {

      let popup = document.querySelector(".copy-popup");

      if(!popup){
        popup = document.createElement("div");
        popup.className = "copy-popup";
        popup.innerText = "Copied Successfully ✅";
        document.body.appendChild(popup);
      }

      popup.classList.add("show");

      setTimeout(()=>{
        popup.classList.remove("show");
      },2000);

    }).catch(()=>{
      alert("Copied!");
    });

  };
}

/* ================= BUTTON CONNECTION (THIS WAS MISSING) ================= */

document.getElementById("generateBtn")?.addEventListener("click", generateCaption);
document.getElementById("regenerateBtn")?.addEventListener("click", generateCaption);

/* ================= IMAGE PREVIEW ================= */

document.getElementById("imageInput")?.addEventListener("change", function (e) {
  const reader = new FileReader();
  reader.onload = function () {
    const preview = document.getElementById("preview");
    preview.src = reader.result;
    preview.style.display = "block";
  };
  reader.readAsDataURL(e.target.files[0]);
});

/* ================= DRAG SCROLL SUPPORT ================= */

const slider = document.querySelector(".coverflow-container");

let isDown = false;
let startX;
let scrollLeft;

if (slider) {

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("dragging");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });
}

/* ================= TYPING ANIMATION ================= */

/* ================= PROFESSIONAL LOOP TYPING ================= */

const typingElement = document.getElementById("typing-text");

const typingWords = [
  "Instagram Caption Generator",
  "Create Viral Captions Instantly",
  "Boost Your Reels Engagement",
  "AI Style Caption Maker"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {

  const currentWord = typingWords[wordIndex];

  if (!isDeleting) {
    // typing
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => isDeleting = true, 1200);
    }

  } else {
    // deleting
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typingWords.length;
    }
  }

  setTimeout(typeLoop, isDeleting ? 50 : 80);
}

typeLoop();
