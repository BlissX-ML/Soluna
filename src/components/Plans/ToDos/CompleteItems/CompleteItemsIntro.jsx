export function Loading({ progress, state }) {
    return (
        <div>
            {!state && <p>请点击左侧的选项</p>}
            {
                state &&
                <>
                    <p>正在加载中</p>
                    <progress value={progress} max="100"></progress>
                    <span>{progress}%</span>
                </>
            }


        </div>
    )
}