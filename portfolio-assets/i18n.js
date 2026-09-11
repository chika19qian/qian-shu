// Original text-node bindings preserve inline markup, links, and interaction listeners.
(() => {
    const chinese = {
    "Skip to about": "跳转到关于我",
    "Hello, glad you're here!": "你好，很高兴你来这里！",
    "Me": "关于我",
    "Projects": "项目",
    "Experience": "经历",
    "Contact": "联系",
    "Hi, I’m": "你好，我是",
    "Psychology at the University of Tokyo.": "在东京大学学习心理学。",
    "Making little things with care.": "用心做一些小而美好的东西。",
    "Links": "找到我",
    "Skills": "技能",
    "AI agents": "AI 智能体",
    "AI agent": "AI 智能体",
    "User testing": "用户测试",
    "The University of Tokyo": "东京大学",
    "B.A. Psychology, Faculty of Letters · GPA 3.8 / 4.0": "文学部 · 心理学学士 · GPA 3.8 / 4.0",
    "Mabuchi International Foundation Scholarship · Monbukagakusho Honors Scholarship": "马渊国际育英财团奖学金 · 文部科学省外国人留学生学习奖励费",
    "UC Berkeley Summer Sessions": "加州大学伯克利分校暑期课程",
    "CS160 User Interface Design and Development · COGSCI131 Computational Models of Cognition": "CS160 用户界面设计与开发 · COGSCI131 认知计算模型",
    "My independent creation.": "我的独立作品。",
    "A diary. A little companion.": "一本日记，一个小伙伴。",
    "A world that grows with you.": "一个陪你慢慢成长的小世界。",
    "Designed and built by me, from idea to iOS app.": "从最初的想法到 iOS 应用，由我独立设计与开发。",
    "SwiftUI · Psychology-inspired design": "SwiftUI · 源于心理学的设计",
    "Meet your Samoyed ↗": "遇见你的小萨摩耶 ↗",
    "Visit the website ↗": "访问官网 ↗",
    "a little world, made with care": "用心搭建的一个小世界",
    "Play story": "播放故事",
    "Pause story": "暂停故事",
    "Let the story unfold.": "让故事慢慢展开。",
    "Swipe to explore · tap the photo to look closer": "左右滑动探索 · 点击图片放大查看",
    "Independent · 2025–present": "独立开发 · 2025 年至今",
    "An iOS journaling app that combines daily reflections, CBT-inspired mini-games, and a Samoyed companion. AI agents write empathetic letters and help with tasks and schedules. The Samo series has 1,000+ users; related posts on Xiaohongshu reached 10K+ likes.": "一款将日常记录、受认知行为疗法（CBT）启发的小游戏与萨摩耶陪伴结合的 iOS 日记应用。AI 智能体会写来温暖的信，也能协助安排任务与日程。Samo 系列已有 1,000 多位用户，相关小红书内容获得了超过 1 万次点赞。",
    "Website ↗": "网站 ↗",
    "Download on the App Store ↗": "在 App Store 下载 ↗",
    "Independent · macOS": "独立开发 · macOS",
    "A Samoyed desktop companion in Swift, with animated behaviors and an AI agent for conversation, tasks, and reminders. It syncs with the SamoDiary ecosystem so the pet can live on the Mac as well as the phone.": "用 Swift 开发的萨摩耶桌面伙伴，拥有丰富的动作，以及支持对话、任务管理与提醒的 AI 智能体。它与 SamoDiary 生态同步，让小萨摩耶既能住在手机里，也能陪在 Mac 桌面上。",
    "Download on the Mac App Store ↗": "在 Mac App Store 下载 ↗",
    "UC Berkeley CS160 · Frontend": "加州大学伯克利分校 CS160 · 前端开发",
    "Team meal-planning web app that recommends recipes from diet, allergies, budget, and meal type. I designed flows in Figma and built the responsive interface, then connected it to MongoDB accounts.": "团队合作开发的饮食规划网站，根据饮食偏好、过敏原、预算和餐食类型推荐食谱。我在 Figma 中设计了交互流程，实现了响应式界面，并接入基于 MongoDB 的账户系统。",
    "Prototype ↗": "交互原型 ↗",
    "Watch the demo": "观看演示",
    "SmartCart in action": "SmartCart 使用演示",
    "Watch on YouTube ↗": "在 YouTube 观看 ↗",
    "Research · UTokyo": "研究 · 东京大学",
    "Dance motion": "舞蹈动作分析",
    "Used OpenPose to extract joint coordinates from dance videos, then compared motion with cosine similarity and dynamic time warping in Python.": "使用 OpenPose 提取舞蹈视频中的关节坐标，再用 Python 结合余弦相似度和动态时间规整（DTW）比较动作。",
    "University blog ↗": "大学博客 ↗",
    "Hackathon · Unity": "黑客松 · Unity",
    "Led a three-person team building a 3D maze puzzle. Stick-breaking maze generation, character interactions, and an AWS dialogue prototype.": "带领三人团队开发 3D 迷宫解谜游戏，实现了基于倒棒法的迷宫生成、角色交互，以及基于 AWS 的对话原型。",
    "Research experience": "研究经历",
    "May 2025 – present": "2025 年 5 月至今",
    "Research Assistant · Imamizu Lab": "研究助理 · 今水研究室",
    "Assisted with behavioral and fMRI experiments: scheduling, task setup, data collection, and basic organization.": "协助开展行为与功能性磁共振成像（fMRI）实验，负责时间安排、实验任务设置、数据采集和基础整理。",
    "Oct 2024 – Feb 2025": "2024 年 10 月—2025 年 2 月",
    "Research Assistant · Takahashi Lab": "研究助理 · 高桥研究室",
    "Helped record auditory-cortex signals in mice and analyzed the data in MATLAB.": "协助记录小鼠听觉皮层信号，并使用 MATLAB 分析数据。",
    "Work": "工作经历",
    "Dec 2025 – Apr 2026": "2025 年 12 月—2026 年 4 月",
    "AI Engineer Intern · Epark Inc.": "AI 工程师实习生 · Epark Inc.",
    "Contributed to AI-based product development in the product planning division.": "在产品企划部门参与 AI 产品开发。",
    "Used generative AI tools to support system design and implementation.": "使用生成式 AI 工具辅助系统设计与实现。",
    "May 2024 – Jun 2024": "2024 年 5 月—2024 年 6 月",
    "STEP Development Program Intern · Google Japan": "STEP 开发项目实习生 · Google 日本",
    "Worked through data structures, algorithms, and systems topics in Python and C++, including TSP and a malloc challenge.": "使用 Python 和 C++ 学习数据结构、算法与系统相关课题，包括旅行商问题（TSP）和 malloc 内存分配挑战。",
    "Studied compilers, memory allocation, architecture, parallelization, and security.": "学习编译器、内存分配、计算机架构、并行化和安全相关知识。",
    "I'd love to hear from you.": "期待收到你的消息。",
    "Have an idea, a project, or an internship opportunity to share? You're always welcome to get in touch.": "无论是一个想法、一个项目，还是实习机会，都欢迎随时联系我。",
    "Email me ↗": "给我发邮件 ↗",
    "Languages: Chinese · English · Japanese (N1) · German (basic)": "语言：中文 · 英语 · 日语（N1）· 德语（基础）",
    "Primary": "主导航",
    "Site language": "网站语言",
    "Follow the yarn ball to the next page": "跟着毛线球前往下一区域",
    "Piano keys from do to ti": "钢琴琴键：从 Do 到 Ti",
    "Do sharp": "升 Do",
    "Re sharp": "升 Re",
    "Fa sharp": "升 Fa",
    "Sol sharp": "升 Sol",
    "La sharp": "升 La",
    "Ring the campus bell. Ding ding!": "播放钟声，再按一次停止。",
    "Play clock chimes. Press again to stop.": "播放钟声，再按一次停止。",
    "A doodle cat playing with yarn. Click to hear a meow.": "和毛线球玩耍的小猫，点击听猫叫。",
    "Pet Samo to hear a squeaky toy and turn the puppy into a heart.": "摸摸 Samo，听捏捏玩具的声音，看它变成爱心。",
    "A sitting doodle cat. Click to hear a meow.": "坐着的小猫，点击听猫叫。",
    "Watch the cat jump for the yarn as it slips out of reach.": "看看小猫跳起来抓住又溜走的毛线。",
    "Email": "电子邮件",
    "Explore SamoDiary chapters": "探索萨摩日记的故事",
    "SamoDiary promotional postcards": "萨摩日记介绍卡片",
    "See the previous chapter": "查看上一章",
    "See the next chapter": "查看下一章",
    "Previous chapter": "上一章",
    "Next chapter": "下一章",
    "Previous image": "上一张图片",
    "Next image": "下一张图片",
    "Close enlarged image": "关闭放大图片",
    "SamoDiary app icon": "萨摩日记应用图标",
    "SamoPet desktop companion": "SamoPet 桌面伙伴",
    "Play the SmartCart video demonstration": "播放 SmartCart 演示视频",
    "SmartCart video preview": "SmartCart 视频预览",
    "SmartCart video demonstration": "SmartCart 演示视频",
    "Dance motion analysis with OpenPose": "使用 OpenPose 分析舞蹈动作",
    "Rock Star Maze game screenshot": "Rock Star Maze 游戏截图",
    "Qian Shu — psychology student at the University of Tokyo. Personal site: internships, research, and selected work.": "Qian Shu — 东京大学心理学学生。个人网站：实习、研究与项目作品。",
    "Psychology student at the University of Tokyo. AI application engineer intern in Tokyo.": "东京大学心理学学生，在东京从事 AI 应用工程实习。"
};
    Object.assign(chinese, {
    "My memory map": "我的回忆地图",
    "A few places, a little of me.": "把回忆，放在地图上。",
    "Three cities. A few memories. Things I made along the way.": "三座城市，一些回忆，还有一路做出的作品。",
    "Choose a city to explore its story and projects": "选择一座城市，看看我的故事和作品",
    "Pacific Ocean": "太平洋",
    "Wuhan": "武汉",
    "Tokyo": "东京",
    "Berkeley": "伯克利",
    "Every pin holds a little story.": "每个标记，都藏着一个故事。",
    "Pick a city to see what it means to me, and what I made there.": "点开一座城市，看看它与我的故事，以及我在那里做出的东西。",
    "Close city story": "关闭城市故事",
    "Where I was born": "我出生的地方",
    "Where I study now": "我现在上学的地方",
    "A summer of building together": "一起动手创造的夏天",
    "Wuhan is where I was born, and where I made SamoDiary and SamoPet. One companion lives in a journal, the other on a desktop: two little ways to bring a Samoyed into everyday life.": "武汉是我出生的地方，也是在这里，我做出了 SamoDiary 和 SamoPet。一个住在日记里，一个陪在桌面上，把小萨摩耶的陪伴带进日常。",
    "Tokyo is where I study now, at the University of Tokyo. Here, I explored dance motion with OpenPose and Python, and led a three-person team building Rock Star Maze. A place for learning, experimenting, and making things.": "东京是我现在上学的地方，我在东京大学学习。在这里，我用 OpenPose 和 Python 探索舞蹈动作，也带领三人团队做出了 Rock Star Maze。学习、尝试，再把想法慢慢做出来。",
    "During my summer at UC Berkeley, I worked with a team on SmartCart. I designed flows in Figma and built the responsive interface for our meal-planning app. This city holds a chapter of learning by making things together.": "在加州大学伯克利分校的暑期课程中，我和团队一起做出了 SmartCart。我用 Figma 设计交互流程，并实现饮食规划应用的响应式界面。这座城市，留下了与伙伴一起边做边学的一段回忆。",
    "Tap a pin, open a memory.": "点一个标记，打开一段回忆。",
    "Made in these places, carried with me.": "在这些地方做出的东西，也成为了我的一部分。"
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
            const key = node.nodeValue.trim();
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
