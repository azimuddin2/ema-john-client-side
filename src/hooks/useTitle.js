const { useEffect } = require("react")

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Ema John`;
    }, [title])
}

export default useTitle;