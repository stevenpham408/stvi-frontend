export const displayAlert = (alertVisibilityFx: (visibility : boolean) => void, ms: number) => {
    alertVisibilityFx(true);
    setTimeout(()=>{
        alertVisibilityFx(false);
    }, ms);
}