export const articleSeq = (seqNum: number) => {
    return `${seqNum.toString().padStart(2, "0")}.`
}

export const toSlug = (title: string) => {
    return title.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLocaleLowerCase()
}