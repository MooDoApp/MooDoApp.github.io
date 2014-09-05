window.addEventListener('message', receiveFrameMessage, false);

var transition = 'webkitTransition';
var transform = 'webkitTransform';

function setTransform(elName, trans, time)
{
    var e = el(elName);
    if(time)
        e.style[transition] = 'all ' + time + 'ms';
    else
        e.style[transition] = '';

    e.style[transform] = trans;
}

function el(id)
{
    return document.getElementById(id);
}

function receiveFrameMessage(e)
{
    console.log('Received: ' + e.data);
    switch(e.data)
    {
        case 'video_connected':
            setTimeout(function()
            {
                sendFrameMessage('demoTopMobile', 'start');
            }, 800);
            break;
        case 'video_synchronized':
            setTransform('topDemoPhone', 'scale(2.4)', 1200);
            break;
        case 'video_started':
            el('video').style.opacity = 1;
            el('videoFrame').style.opacity = 1;
            break;
        case 'video_phone':
            el('callingFrame').style.visibility = 'visible';
            setTransform('topDemoFrame', 'scale(0)', 400);

            setTimeout(function()
            {
                el('callingWrapper').style[transition] = 'all 800ms';
                el('callingWrapper').style.opacity = 1;
            }, 300);
            break;
        case 'video_zoom':
            setTransform('topDemoPhone', 'translate(-200px, -160px) scale(1.4)', 1000);
            break;
        case 'video_conclusion':
            el('callingFrame').style.opacity = 0;
            setTransform('topDemoPhone', 'translate(-380px, 40px) scale(8)', 1800);

            el('videoFrame').style.opacity = 0;

            setTimeout(function()
            {
                el('topDemoPhone').style.visibility = 'hidden';

                el('videoButtons').style.opacity = 1;
                el('videoButtons').style.display = 'block';
            }, 1200);
            break;
    }
}

function sendFrameMessage(id, data)
{
    var ele = document.getElementById(id);

    if (ele)
    {
        var frame = ele.contentWindow;

        frame.postMessage(data, '*');
    }
}