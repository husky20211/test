function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            initializeApp();
        })
        .catch((err) => {
            alert('啟動失敗。');
        });
}

function initializeApp() {
    var h = document.getElementById('result');
    h.innerHTML = 'Hello!!';
}

//使用 LIFF_ID 初始化 LIFF 應用
initializeLiff('1656080150-vN3mKxw3');

var buttonComponent = new ButtonComponent
{
    Style = ButtonStyle.Primary,
    Action = new UriTemplateAction(
        "LIFF", "line://app/123456789-OXOXOXOXOX")
};

var flexMessage = new FlexMessage("LIFF")
{
    Contents = new BubbleContainer
    {
        Body = new BoxComponent
        {
            Layout = BoxLayout.Vertical,
            Contents = new List<IFlexComponent>
            {
                buttonComponent
            }
        }
    }
};

await _messagingClient.ReplyMessageAsync(ev.ReplyToken,
    new List<ISendMessage> { flexMessage });
