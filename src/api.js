export const fetchData = async () => {
    try {
        const res = await fetch('https://randomuser.me/api');
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
