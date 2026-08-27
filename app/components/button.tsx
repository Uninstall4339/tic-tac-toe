
export default function Button({display}:{display : string}){
    return(
        <>
        <button className="rounded-md bg-yellow-400 w-30 h-10 m-3 text-black"
        >{display}</button>
        </>
    );
}