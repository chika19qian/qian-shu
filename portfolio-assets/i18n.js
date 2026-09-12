// Original text-node bindings preserve inline markup, links, and interaction listeners.
(() => {
    const chinese = {
    "Skip to about": "跳转到“关于我”",
    "Hello, glad you're here!": "你好，欢迎来到我的小世界！",
    "Say hello to Qian": "欢迎联系我呀～",
    "Hmm?": "嗯？",
    "Hi, lovely to meet you!": "你好呀，很高兴见到你！",
    "Background music": "背景音乐",
    "Play music": "播放音乐",
    "Pause music": "暂停音乐",
    "Music is playing": "音乐已播放",
    "Music paused": "音乐已暂停",
    "Music could not play. Please try again.": "音乐暂时无法播放，请再试一次。",
    "Me": "关于我",
    "Projects": "项目",
    "Experience": "经历",
    "Contact": "联系方式",
    "Hi, I’m": "你好，我是",
    "Psychology at the University of Tokyo.": "来自东京大学心理学",
    "Making little things with care.": "用心面对每一个小灵感～",
    "Links": "链接",
    "Skills": "技能",
    "AI agents": "AI 智能体",
    "AI agent": "AI 智能体",
    "User testing": "用户测试",
    "The University of Tokyo": "东京大学",
    "B.A. Psychology, Faculty of Letters · GPA 3.8 / 4.0": "文学部 · 心理学本科 · GPA 3.8 / 4.0",
    "Mabuchi International Foundation Scholarship · Monbukagakusho Honors Scholarship": "马渊国际育英财团奖学金 · 文部科学省外国人留学生学习奖励费",
    "UC Berkeley Summer Sessions": "加州大学伯克利分校暑期课程",
    "CS160 User Interface Design and Development · COGSCI131 Computational Models of Cognition": "CS160 用户界面设计与开发 · COGSCI131 认知计算模型",
    "My independent creation.": "我的独立作品",
    "A diary. A little companion.": "一本日记和一只小萨摩耶。",
    "A world that grows with you.": "陪你记录日常，陪你慢慢成长。",
    "Designed and built by me, from idea to iOS app.": "从想法到 iOS 应用，设计和开发都由我独立完成。",
    "SwiftUI · Psychology-inspired design": "SwiftUI · 融入心理学的交互设计",
    "Meet your Samoyed ↗": "领养你的小萨摩耶 ↗",
    "Visit the website ↗": "访问官网 ↗",
    "a little world, made with care": "一点点做出来的小世界",
    "Play story": "开始轮播",
    "Pause story": "暂停轮播",
    "Let the story unfold.": "慢慢逛逛这个小世界。",
    "Swipe to explore · tap the photo to look closer": "左右滑动切换 · 点击图片放大",
    "Independent · 2025–present": "独立开发 · 2025 年至今",
    "An iOS journaling app that combines daily reflections, CBT-inspired mini-games, and a Samoyed companion. AI agents write empathetic letters and help with tasks and schedules. The Samo series has 1,000+ users; related posts on Xiaohongshu reached 10K+ likes.": "我独立开发的 iOS 日记应用，把心情记录、受认知行为疗法（CBT）启发的小游戏和萨摩耶养成结合在一起。AI 智能体会写信回应用户的心情，也能帮忙管理任务和日程。Samo 系列已有 1,000 多位用户，相关小红书内容获得了 1 万多次点赞。",
    "Website ↗": "查看网站 ↗",
    "Download on the App Store ↗": "在 App Store 下载 ↗",
    "Independent · macOS": "独立开发 · macOS",
    "A Samoyed desktop companion in Swift, with animated behaviors and an AI agent for conversation, tasks, and reminders. It syncs with the SamoDiary ecosystem so the pet can live on the Mac as well as the phone.": "用 Swift 开发的萨摩耶桌宠，有多种动画和互动，还接入了支持聊天、任务管理与提醒的 AI 智能体。它能与 SamoDiary 同步，让小萨摩耶从手机来到 Mac 桌面。",
    "Download on the Mac App Store ↗": "在 Mac App Store 下载 ↗",
    "UC Berkeley CS160 · Frontend": "伯克利 CS160 · 前端开发",
    "Team meal-planning web app that recommends recipes from diet, allergies, budget, and meal type. I designed flows in Figma and built the responsive interface, then connected it to MongoDB accounts.": "我和团队一起开发的饮食规划网站，会根据饮食偏好、过敏信息、预算和用餐类型推荐食谱。我负责 UI 设计和全部前端开发，也参与了部分后端工作，包括对接 MongoDB 账户系统。",
    "Prototype ↗": "交互原型 ↗",
    "Watch the demo": "观看演示视频",
    "SmartCart in action": "SmartCart 使用演示",
    "Watch on YouTube ↗": "在 YouTube 观看 ↗",
    "Research · UTokyo": "研究 · 东京大学",
    "Dance motion": "舞蹈动作分析",
    "Used OpenPose to extract joint coordinates from dance videos, then compared motion with cosine similarity and dynamic time warping in Python.": "用 OpenPose 提取舞蹈视频中的关节坐标，再用 Python 结合余弦相似度和动态时间规整（DTW），比较动作的相似程度。",
    "University blog ↗": "阅读大学博客 ↗",
    "Hackathon · Unity": "黑客松 · Unity",
    "Led a three-person team building a 3D maze puzzle. Stick-breaking maze generation, character interactions, and an AWS dialogue prototype.": "带领三人团队开发了一款 3D 迷宫解谜游戏。游戏采用倒棒法生成迷宫，并加入了角色互动和基于 AWS 的对话原型。",
    "Research experience": "研究经历",
    "May 2025 – present": "2025 年 5 月至今",
    "Research Assistant · Imamizu Lab": "研究助理 · 今水研究室",
    "Assisted with behavioral and fMRI experiments: scheduling, task setup, data collection, and basic organization.": "协助开展行为实验和功能性磁共振成像（fMRI）实验，包括安排实验时间、设置实验任务，以及采集和整理数据。",
    "Oct 2024 – Feb 2025": "2024 年 10 月—2025 年 2 月",
    "Research Assistant · Takahashi Lab": "研究助理 · 高桥研究室",
    "Helped record auditory-cortex signals in mice and analyzed the data in MATLAB.": "协助记录小鼠听觉皮层的神经信号，并用 MATLAB 分析数据。",
    "Work": "实习经历",
    "Dec 2025 – Apr 2026": "2025 年 12 月—2026 年 4 月",
    "AI Engineer Intern · Epark Inc.": "AI 工程师实习生 · Epark Inc.",
    "Contributed to AI-based product development in the product planning division.": "在产品企划部门参与 AI 产品的开发。",
    "Used generative AI tools to support system design and implementation.": "用生成式 AI 工具辅助系统设计与开发。",
    "May 2024 – Jun 2024": "2024 年 5 月—2024 年 6 月",
    "STEP Development Program Intern · Google Japan": "STEP 开发项目实习生 · Google 日本",
    "Worked through data structures, algorithms, and systems topics in Python and C++, including TSP and a malloc challenge.": "用 Python 和 C++ 练习数据结构、算法和系统相关课题，包括旅行商问题（TSP）和 malloc 内存分配挑战。",
    "Studied compilers, memory allocation, architecture, parallelization, and security.": "学习了编译器、内存分配、计算机架构、并行计算和安全等相关知识。",
    "I'd love to hear from you.": "欢迎来聊聊。",
    "Have an idea, a project, or an internship opportunity to share? You're always welcome to get in touch.": "如果想交流想法、一起做项目，或聊聊实习机会，都欢迎联系我～",
    "Email me ↗": "给我发邮件 ↗",
    "Languages: Chinese · English · Japanese (N1) · German (basic)": "语言：中文 · 英语 · 日语（N1）· 德语（基础）",
    "Primary": "主导航",
    "Site language": "网站语言",
    "Follow the yarn ball to the next page": "点击毛线球，继续往下看",
    "Piano keys from do to ti": "钢琴琴键：Do 到 Ti",
    "Do sharp": "升 Do",
    "Re sharp": "升 Re",
    "Fa sharp": "升 Fa",
    "Sol sharp": "升 Sol",
    "La sharp": "升 La",
    "Ring the campus bell. Ding ding!": "点击播放钟声，再点一次停止。",
    "Play clock chimes. Press again to stop.": "点击播放钟声，再点一次停止。",
    "A doodle cat playing with yarn. Click to hear a meow.": "点击玩毛线的小猫，听它喵一声。",
    "Pet Samo to hear a squeaky toy and turn the puppy into a heart.": "点击 Samo，听捏捏玩具的声音，看它变成爱心。",
    "A sitting doodle cat. Click to hear a meow.": "点击坐着的小猫，听它喵一声。",
    "Watch the cat jump for the yarn as it slips out of reach.": "点击小猫，看它跳起来抓毛线球。",
    "Email": "电子邮件",
    "Explore SamoDiary chapters": "浏览萨摩日记的功能介绍",
    "SamoDiary promotional postcards": "萨摩日记介绍图",
    "See the previous chapter": "查看上一页介绍",
    "See the next chapter": "查看下一页介绍",
    "Previous chapter": "上一页介绍",
    "Next chapter": "下一页介绍",
    "Previous image": "上一张图片",
    "Next image": "下一张图片",
    "Close enlarged image": "关闭图片",
    "SamoDiary app icon": "萨摩日记应用图标",
    "SamoPet desktop companion": "SamoPet 桌宠",
    "Play the SmartCart video demonstration": "播放 SmartCart 演示视频",
    "SmartCart video preview": "SmartCart 视频预览",
    "SmartCart video demonstration": "SmartCart 演示视频",
    "Dance motion analysis with OpenPose": "使用 OpenPose 分析舞蹈动作",
    "Rock Star Maze game screenshot": "Rock Star Maze 游戏截图",
    "Qian Shu — psychology student at the University of Tokyo. Personal site: internships, research, and selected work.": "Qian Shu 的个人网站：在东京大学读心理学，记录我的项目作品、研究和实习经历。",
    "Psychology student at the University of Tokyo. AI application engineer intern in Tokyo.": "东京大学心理学学生，有 AI 应用开发实习经历。"
};
    Object.assign(chinese, {
    "My memory map": "我的回忆地图",
    "A few places, a little of me.": "在地图上看看我的回忆吧。",
    "Three cities. A few memories. Things I made along the way.": "在这三座不同的城市里，藏着我的几段回忆。",
    "Choose a city to explore its story and projects": "点击城市标记，查看我在那里的经历和作品",
    "Pacific Ocean": "太平洋",
    "Wuhan": "武汉",
    "Tokyo": "东京",
    "Berkeley": "伯克利",
    "Every pin holds a little story.": "每个标记都是一段回忆。",
    "Pick a city to see what it means to me, and what I made there.": "点一个城市标记，读读我在那里的故事，看看在那里做的作品。",
    "Close city story": "关闭城市故事",
    "Where I was born": "我出生的地方",
    "Where I study now": "我现在上学的地方",
    "A summer of building together": "和朋友一起做项目的夏天",
    "Tap a pin, open a memory.": "点开标记，看看这段回忆。",
    "Made in these places, carried with me.": "这些地方和作品，慢慢成了我的一部分。",
    "Wuhan is where I was born. In a difficult season of my life, it was also where I began making a diary app for myself: a small place to set down what I was carrying.": "武汉是我的出生地，SamoDiary 和 SamoPet 也从这里开始。那时，我正经历一段很艰难的日子，那时我想给自己做个日记软件，记录每天的心情。",
    "Little by little, I wove in what I had learned about psychology. SamoDiary and SamoPet grew from that beginning, along with a magical forest that was once mine and is now open to everyone. Making it has been a journey of healing, too.": "后来，我慢慢把学到的心理学知识融入其中，也逐渐有了做出一座魔法森林的想法。最初，它只是我自己的小天地；现在，我很高兴能和大家分享。做出这些作品的过程，对我来说也是一段治愈自己的旅程。",
    "Tokyo is where I study now. In class, I explored dance through OpenPose and Python, learning to read the body's movement in the language of code.": "东京是我现在读书的地方。在课堂上，我用 OpenPose 和 Python 分析舞蹈动作，尝试从数据里理解身体的表达。",
    "With two women I met during my Google internship, I led our team of three in building Rock Star Maze at an Amazon hackathon. We brought the curiosity and playfulness at the heart of a hackathon, and turned an idea into a maze we could step inside.": "我还和在 Google 实习时认识的两位女生组队，由我带队参加 Amazon 的黑客松，一起做出了 Rock Star Maze。带着好奇心和伙伴一起把一个点子真的做出来——这是我喜欢黑客松的原因。",
    "My summer at UC Berkeley was my first time in an English-speaking country. An unfamiliar world brought plenty of challenges, and, along the way, many good friends.": "去伯克利上暑期课，是我第一次来到英语国家。面对陌生的环境，我遇到了不少挑战，也在那里交到了很多好朋友。",
    "In our HCI class, we made SmartCart together. I designed the UI, built all of the frontend interfaces and web pages, and contributed to part of the backend. As I found my feet in a new place, I was also learning to give ideas a shape that others could see and use.": "在人机交互（HCI）课上，我们一起完成了 SmartCart。我独立完成了 UI 设计和全部前端开发，也参与了部分后端工作。那是一个边适应新生活、边和朋友一起学习和做项目的难忘的夏天。"
});
    // Concise bilingual stories; inline spans preserve translation boundaries.
    Object.assign(chinese, {
    "Wuhan is my hometown. During a difficult time, I started building a diary app for myself.": "武汉是我的家乡。经历低谷时，我开始给自己做一个日记软件。",
    "With psychology woven in, ": "慢慢融入心理学知识后，",
    "SamoDiary and SamoPet": "SamoDiary 和 SamoPet",
    " became a magical forest to share—a journey of healing for me, too.": " 长成了一座可以与大家分享的魔法森林，也陪我走过了一段治愈之旅。",
    "I study in Tokyo, where I explored dance motion with ": "我现在在东京读书，在课上用",
    "OpenPose and Python.": " OpenPose 和 Python 分析舞蹈动作。",
    "With two women I met at Google, I ": "我和在 Google 实习时认识的两位女生组队，",
    "led our team of three": "由我带队",
    " to build Rock Star Maze at an Amazon hackathon—curiosity and playfulness at work.": "参加 Amazon 黑客松，带着好奇心和玩心做出了 Rock Star Maze。",
    "UC Berkeley Summer Sessions took me to an English-speaking country for the first time, bringing new challenges and good friends.": "伯克利暑期课是我第一次来到英语国家。遇到了不少挑战，也交到了好朋友。",
    "For our HCI project SmartCart, I handled ": "在 HCI 课程项目 SmartCart 中，我负责",
    "UI design and all frontend development": " UI 设计和全部前端开发",
    ", and contributed to the backend.": "，也参与了部分后端工作。",
    "Supported ": "协助开展",
    "behavioral and fMRI experiments": "行为与 fMRI 实验",
    ", from scheduling to data collection.": "，负责排期、任务设置与数据采集。",
    "Helped record mouse auditory-cortex signals and ": "协助采集小鼠听觉皮层信号，并用",
    "analyzed data in MATLAB.": " MATLAB 分析数据。",
    "Contributed to ": "参与",
    "AI product development": " AI 产品开发",
    ", using generative AI to support design and implementation.": "，用生成式 AI 辅助系统设计与实现。",
    "Practiced ": "用 ",
    "algorithms and systems in Python and C++": "Python 和 C++ 完成算法与系统课题",
    ", including TSP and memory allocation.": "，包括 TSP 和内存分配。"
});
    let language = 'en';
    try { if (localStorage.getItem('qian-site-language') === 'zh') language = 'zh'; } catch {}
    const t = text => language === 'zh' ? (chinese[text] ?? text) : text;
    const textBindings = [];
    const attributeBindings = [];
    const applyLanguage = next => {
        language = next === 'zh' ? 'zh' : 'en';
        document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
        textBindings.forEach(({ node, original, key }) => { node.nodeValue = original.replace(key, t(key)); });
        attributeBindings.forEach(({ element, attribute, original }) => { element.setAttribute(attribute, t(original)); });
        document.querySelectorAll('[data-language]').forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.language === language));
        });
        try { localStorage.setItem('qian-site-language', language); } catch {}
        document.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { language } }));
    };
    window.portfolioI18n = { t, get language() { return language; }, setLanguage: applyLanguage };
    document.addEventListener('DOMContentLoaded', () => {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (node.parentElement.closest('script, style, svg, .samo-story, .samo-chapters, .samo-play-toggle, #samo-lightbox-title')) continue;
            const key = Object.hasOwn(chinese, node.nodeValue) ? node.nodeValue : node.nodeValue.trim();
            if (Object.hasOwn(chinese, key)) textBindings.push({ node, key, original: node.nodeValue });
        }
        document.querySelectorAll('[aria-label], [alt], [title], meta[name="description"], meta[property="og:description"]').forEach(element => {
            if (element.matches('.samo-print-main, .samo-print-main img, #samo-full-image, [data-samo-index]')) return;
            ['aria-label', 'alt', 'title', 'content'].forEach(attribute => {
                const original = element.getAttribute(attribute);
                if (original && Object.hasOwn(chinese, original)) attributeBindings.push({ element, attribute, original });
            });
        });
        document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
        applyLanguage(language);
    });
})();
