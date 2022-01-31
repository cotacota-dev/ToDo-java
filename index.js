//import "./styles.css";

    const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);


    };

    // 未完了しストから指定の要素を削除
    const deleteFromIncompleteList = (target) => {
        document.getElementById("incomplete-list").removeChild(target);
    }

    // 完了しストから指定の要素を削除
    const deleteFromCompleteList = (target) => {
        document.getElementById("complete-list").removeChild(target);
    }

    // 未完了リストに追加する関数
    const createIncompleteList = (text) => {
            // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    console.log(div);

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    console.log(li);

    // 未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(div);

    //完了　ボタン
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの親タグ(div)を未完了リストから削除
        deleteFromIncompleteList(completeButton.parentNode)
        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode;
        // TODOテキストを取得
        const text = addTarget.firstElementChild.innerText;
        // div以下を初期化
        addTarget.textContent = null;
        // li作成
        const li = document.createElement("li");
        li.innerText = text;


        // button作成
        const returnButton = document.createElement("button");
        returnButton.innerText = "戻す";
        returnButton.addEventListener("click", () => {
            // 押された完了ボタンの親タグ(div)を未完了リストから削除
            deleteFromCompleteList(returnButton.parentNode)
            const returnTarget = returnButton.parentNode;
            const text =returnTarget.firstElementChild.innerText;
            createIncompleteList(text);
        });

        //document.getElementById("complete-list").appendChild(div);
        addTarget.appendChild(li);
        addTarget.appendChild(returnButton);
        document.getElementById("complete-list").appendChild(addTarget);
});

    //削除　ボタン
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        deleteFromIncompleteList(deleteButton.parentNode)
    });

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    }

    document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
