import "server-only";

export const serverSideFuntion = () => {
    console.log(
        `use multiple libraries,
            use environment veriables
            interact with a database
            process confidential information`
    );
    return "server result";
}