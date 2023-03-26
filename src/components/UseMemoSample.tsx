import React, { useState, useMemo} from 'react'


//useMemoを使って効率的（省力化）できる。1の方法は、全部再計算するから無駄。重くなる原因。２の方法は追加した部分だけ計算。例題は文字数カウントだが、実際に何かしら重い処理を再計算させると、ページの表示速度が落ちユーザーの離脱が高まる。




export const UseMemoSample = () => {
    //textは現在のテキストボックスの中身の値を保持する。
    const [text, setText] = useState('')

    //itemsは文字列のリストを保持する。
    const [items, setItems] = useState<string[]>([])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    // ボタンをクリックした時に呼ばれる関数
    const onClickButton = () => {
        setItems((prevItems) => {
            //現在の入力値をitemsに追加する、この時新しい配列を作成して保存する。
            return [...prevItems, text]
        setText('')
        })
    }

    //numberOfCharacter1は再描写のたびにitem.reduceを実行して結果を得る。
    const numberOfCharacter1 = items.reduce((sub, item) => sub + item.length, 0)

    //numberOfCharacter2はuseMemoを使い、itemsが新しくなった時だけ関数を実行してメモを更新します。
    const numberOfCharacter2 = useMemo(() => {
        //第二引数の配列の中にitemsがあるので、itemsが新しくなったときだけ関数を実行してメモを更新します。
        return items.reduce((sub, item) => sub + item.length, 0)
    }, [items])


    return (
    <div>
        <p>UseMemoSample</p>
        <div>
            <input value={text} onChange={onChangeInput} />
            <button onClick={onClickButton}>add</button>
        </div>
        <div>
            {items.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
        <div>
            <p>Total Number of Character 1: {numberOfCharacter1}</p>
            <p>Total number of Characer 2: {numberOfCharacter2}</p>
        </div>
    </div>
    )
}
