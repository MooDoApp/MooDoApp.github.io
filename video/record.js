var rqConfig =
{
    paths:
    {
        'util': '/landing/js/util',
        'DemoManager': '/landing/js/DemoManager'
    },
    waitSeconds: 0
};

require.config(rqConfig);

requirejs(['util', 'DemoManager'], function (util, DemoManager)
{
var elementCache = {};
function el(id)
{
    return (typeof id == 'string') ?
            (elementCache[id] || (elementCache[id] = document.getElementById(id))) :
            id;
}
function addPrefix(p)
{
    var prefix = '';
    var v = [ 'ms', 'webkit', 'moz', 'o' ];
    var s = document.body.style;
    var p2 = p.charAt(0).toUpperCase() + p.slice(1);
    if (typeof s[p] == 'string')
    {
        prefix = '';
    }
    else
    {
        for ( var i = 0; i < v.length; i++) {
            if (typeof s[v[i] + p2] == 'string') {
                prefix = v[i];
                break;
            }
        }
    }

    var styleString = (prefix.length > 0) ? p.charAt(0).toUpperCase() + p.slice(1) : p;

    if (prefix)
    {
        return prefix + styleString;
    }
    else
    {
        return styleString;
    }
}

var transform = 'transform';
var transition = 'transition';
var animation = 'animation';
var animationDelay = 'animationDelay';

window.log = console.log.bind(console);

transform = addPrefix('transform');
transition = addPrefix('transition');
animation = addPrefix('animation');
animationDelay = addPrefix('animationDelay');

var demoDatas = {
    'intro': {
        data: 'intro.intro',
        panes: 'PaneGmail:1:2',
        script: 'intro'
    },
    'kanban': {
        data: 'intro.kanban',
        panes: '1,,kIdeas:1,,kTodo:1,,kProgress:1,,kTesting',
        script: 'kanban'
    },
    'gtd': {
        data: 'intro.gtd',
        panes: '1,,inbox:1,,projects:2,#mobile',
        script: 'gtd'
    },
    'project': {
        data: 'intro.project',
        panes: '1,,todo:1,+Jay -//:1,#Android',
        script: "projectManagement"
    },
    'inbox': {
        data: 'intro.inbox',
        panes: 'PaneGmail:1:1,,respond',
        script: 'inboxZero'
    }
};

var demoData = [];

function createDemo(id, name)
{
    var d = demoDatas[name];
    var src = '/app/#demo=true&touch=false&dmode=0x1091&data=' +
                d.data +
                '&panes=' +
                d.panes +
                '&script=' +
                (d.script ? d.script : 'none');

    return {
        id: id,
        src: src,
        noMobile: true
    };
}
DemoManager.registerDemo(createDemo('demoIntro', 'intro'));

DemoManager.config({});

DemoManager.beginLoading();



var messageHandlers = {};

function receiveFrameMessage(e)
{
    console.log('Received: ' + e.data);
    if(messageHandlers[e.data])
    {
        messageHandlers[e.data]();
    }
    else
    {
        switch(e.data)
        {
            case 'demo_started':
                el('topDemo').style.opacity = 1;
                break;
            case 'demo_done':
                var elements = el('checkboxes').children;
                for(var i = 0; i < elements.length; i ++)
                {
                    elements[i].style[animationDelay] = (i * 0.15 + 0.5) + 's';
                    log(animationDelay, elements[i].style[animationDelay]);
                }
                document.documentElement.classList.add('demoDone');
                break;
        }
    }
}
window.addEventListener('message', receiveFrameMessage, false);

function sendFrameMessage(id, data)
{
    var ele = document.getElementById(id);

    if (ele)
    {
        var frame = ele.contentWindow;
        if (frame)
        {
            frame.postMessage(data, '*');
        }
    }
    else if(DEBUG)
    {
        debugger;
    }
}


function runAnimations()
{
    // Animations
    var textEl = el('i1Title');
    function setStyle(time, id, key, value)
    {
        var e = el(id);
        e.style[transition] = time ? ('all ' + time + 'ms ease-in-out') : '';
        e.style[key] = value;
    }
    function move(time, id, x, y)
    {
        setStyle(time, id, transform, 'translate(' + x + 'px,' + y + 'px)');
    }
    function scale(time, id, x, y)
    {
        setStyle(time, id, transform, 'scale(' + x + ',' + y +')');
    }
    function addClass(time, id, cls)
    {
        var e = el(id);
        e.classList.add(cls);
    }
    function removeClass(time, id, cls)
    {
        var e = el(id);
        e.classList.remove(cls);
    }
    function hide(time, id)
    {
        setStyle(time, id, 'opacity', 0);
    }
    function show(time, id)
    {
        setStyle(time, id, 'opacity', 1);
    }
    function fadeText(time, id, nonfade, fade)
    {
        var e = el(id);
        var width = e.getBoundingClientRect().width;
        e.innerHTML = '<span>' + nonfade + '</span><span class="fadeIn1s">' + fade + '</span>';
    }
    function setHTML(time, id, html)
    {
        var e = el(id);
        e.innerHTML = html;
    }
    function type(time, id, text, index)
    {
        index = index || 0;
        var e = el(id);
        var str = text.substr(0, index + 1);
        e.innerText = str;
        if(text.length > index + 1)
            setTimeout(type, time, time, id, text, index + 1);
    }
    function setText(time, id, text)
    {
        var e = el(id);
        e.innerText = text;
    }
    function sendMsg(time, data)
    {
        sendFrameMessage('demoIntro', data);
    }
    function loadDemo(time, name, script)
    {
        var d = demoDatas[name];
        var msg = 'data=' + d.data +
                  '&panes=' + d.panes;
        if(script)
            msg += '&script=' + name;

        sendFrameMessage('demoIntro', msg);
    }
    function startScript(time, name)
    {
        var msg = 'script=' + name;
        sendFrameMessage('demoIntro', msg);
    }



    var animQueue = [];
    var animIndex = -1;

    function q()
    {
        animQueue.push(Array.prototype.slice.call(arguments, 0));
    }
    function d(time)
    {
        animQueue.push(time);
    }
    function wait(msg)
    {
        animQueue.push(msg);
    }

    var isPaused = false;
    var stoppedFromPause = false;

    function runNext()
    {
        do
        {
            if (isPaused)
            {
                stoppedFromPause = true;
                return;
            }
            animIndex ++;

            var next = animQueue[animIndex];
            if (next)
            {
                if(!isNaN(next))
                {
                    // next is a delay
                    setTimeout(runNext, next);
                    break;
                }
                if(typeof next === 'string')
                {
                    messageHandlers[next] = runNext;
                    break;
                }
                var time = next[0];
                var fn = next[1];
                next.splice(1, 1);
                fn.apply(fn, next);
            }
        } while (next)
    }

    d(2000);


    // Starting positions
    var cardsPos = 80;
    var demoPos = cardsPos - 10;
    q(0, hide, 'i1Title');
    q(0, hide, 'i1Title2');
    q(0, setText, 'i1Title2', '');
    q(0, hide, 'demoIntroWrapper');
    q(0, setStyle, 'i1Cards', 'display', '');
    q(0, move, 'i1Title', -135, 25);
    q(0, move, 'i1Title2', -135, 60);
    q(0, move, 'i1Cards', 0, cardsPos);
    q(0, move, 'demoIntroWrapper', 315, demoPos);
    q(0, setText, 'i1Title', 'Organize everything');
    d(500);


    // Intro
    q(1000, show, 'i1Title2');
    q(1000, show, 'i1Title');
    d(2000);

    // Plop out the cards
    q(0, show, 'i1Cards');
    for(var i = 0; i < 6; i ++)
    {
        q(200, show, 'i1C' + i);
        q(200, setStyle, 'i1C' + i, 'boxShadow', '0 1px 4px rgba(0,0,0,0.3)');
        d(140);
    }
    d(1000);

    // Bring the cards together
    q(1000, move, 'i1Cards', 0, cardsPos + 40);
    for(var i = 0; i < 6; i ++)
    {
        q(1000, setStyle, 'i1C' + i, 'boxShadow', '');
        q(1000, move, 'i1C' + i, 0, -i * 20);
    }
    d(200);
    q(0, fadeText, 'i1Title2', '', 'together');
    q(400);

    q(0, addClass, 'i1Cards', 'show');

    // Indent the cards
    d(1500);
    q(1000, fadeText, 'i1Title2', 'together ', 'in a simple outline');

    q(0, setStyle, 'i1CardsEls', 'overflow', 'hidden');
    for(var i = 0; i < 6; i ++)
    {
        var x;
        if(i > 0)
            x = 50;
        if(i == 3)
            x = 100;
        q(1000, move, 'i1C' + i, x, -i * 20);
    }

    // Fade out
    d(2000);
    q(1000, setStyle, 'i1Cards', 'opacity', 0);
    q(1000, setStyle, 'i1Title', 'opacity', 0);
    q(1000, setStyle, 'i1Title2', 'opacity', 0);
    d(1000);
    q(0, setStyle, 'i1Cards', 'display', 'none');

    // Fade into email
    q(1000, setStyle, 'i1Title', 'opacity', 1);
    q(0, setText, 'i1Title', '');
    q(1000, setStyle, 'demoIntroWrapper', 'opacity', 1);
    q(0, sendMsg, 'start');
    q(0, sendMsg, 'video');
    q(0, move, 'i1Title', -115, 25);
    q(0, fadeText, 'i1Title', '', 'This is your email');


    wait('showSecondPane');

    // Show two panes
    q(1000, move, 'demoIntroWrapper', 160, demoPos);
    q(1000, fadeText, 'i1Title', 'This is your email', '');
    q(0, setStyle, 'i1Title2', 'opacity', 1);
    q(0, move, 'i1Title2', 190, 25);
    q(0, fadeText, 'i1Title2', '', '', 200);
    q(1000, fadeText, 'i1Title2', '', 'This is your todo list');
    q(1000, move, 'i1Title', -270, 25);
    q(1000, move, 'i1Title2', 25, 25);


    wait('showEmails');

    // Email on todo list
    q(1000, fadeText, 'i1Title', 'This is your email', ' on');
    q(0, setHTML, 'i1Title2', '<span class="fadeOut500ms">This is </span><span>your todo list</span>');
    q(1000, move, 'i1Title', -225, 25);
    q(1000, move, 'i1Title2', -48, 25);


    d(1500);

    // Show three panes
   wait('showAgenda');

    // Email and tasks on calendar
    q(1000, move, 'demoIntroWrapper', 0, demoPos);
    q(0, setHTML, 'i1Title', '<span>This is your email</span><span class="fadeOut500ms"> on</span>');
    q(0, setHTML, 'i1Title2', '<span style="visibility: hidden;">This is </span><span class="fadeOut500ms">your </span><span>todo list</span><span class="fadeIn1s"> on your calendar</span>');
    d(200);
    q(1000, move, 'i1Title', -290, 25);
    q(1000, move, 'i1Title2', -163, 25);
    d(300);
    q(0, setHTML, 'i1Title', '<span>This is your email</span><span class="fadeIn1s"> and</span>');


    wait('done');

    // Show the next set of demos
    q(1000, hide, 'demoIntroWrapper');
    q(1000, hide, 'i1Title');
    q(1000, hide, 'i1Title2');
    d(1000);
    q(0, move, 'i1Title', -180, 25);
    q(0, setText, 'i1Title', 'Organize however you want');
    d(100);
    q(1000, show, 'i1Title');
    q(0, sendMsg, 'demoIntroWider');
    q(0, loadDemo, 'kanban');
    d(2500);
    q(0, setHTML, 'i1Title', 'Organize <span class="fadeOut500ms">however you want</span>');
    d(1500);
    q(1000, fadeText, 'i1Title', 'Organize ', 'with kanban boards');
    d(1500);
    q(1000, show, 'demoIntroWrapper');
    d(1000);
    q(0, startScript, 'kanban');
    wait('done');
    d(1000);

    q(1000, hide, 'i1Title');
    q(1000, hide, 'demoIntroWrapper');
    d(1000);
    q(0, loadDemo, 'gtd');
    q(0, move, 'i1Title', -120, 25);
    d(100);
    q(1000, fadeText, 'i1Title', 'Organize ', 'with GTD');
    q(1000, show, 'i1Title');
    d(1000);
    q(1000, show, 'demoIntroWrapper');
    d(1000);
    q(0, startScript, 'gtd');
    wait('done');
    d(1000);

    q(1000, hide, 'i1Title');
    q(1000, hide, 'demoIntroWrapper');
    d(1000);
    q(0, loadDemo, 'project');
    q(0, move, 'i1Title', -180, 25);
    d(100);
    q(0, setText, 'i1Title', 'Manage your team\'s projects');
    q(1000, show, 'i1Title');
    d(1000);
    q(1000, show, 'demoIntroWrapper');
    d(1000);
    q(0, startScript, 'projectManagement');
    wait('done');
    d(1000);

    q(1000, hide, 'i1Title');
    q(1000, hide, 'demoIntroWrapper');
    d(1000);
    q(0, loadDemo, 'inbox');
    q(0, move, 'i1Title', -130, 25);
    d(100);
    q(0, setText, 'i1Title', 'Achieve Inbox Zero');
    q(1000, show, 'i1Title');
    d(1000);
    q(1000, show, 'demoIntroWrapper');
    d(1000);
    q(0, startScript, 'inboxZero');
    wait('done');
    d(1000);

    q(1000, hide, 'i1Title');
    q(1000, hide, 'demoIntroWrapper');
    d(1000);
    q(0, loadDemo, 'inbox');
    q(0, move, 'i1Title', -190, 220);
    q(0, move, 'i1Title2', -100, 270);
    d(100);
    q(0, setText, 'i1Title', 'Organize everything, your way');
    q(0, setHTML, 'i1Title2', '<a >http://moo.do</a>');
    q(1000, show, 'i1Title');
    q(1000, show, 'i1Title2');



    runNext();
}

runAnimations();

});