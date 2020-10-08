export const displayAlert = (fx:Function, ms: number) => {
    fx(true);
    setTimeout(()=>{
        fx(false);
    }, ms);
}