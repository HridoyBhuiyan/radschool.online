class VanillaJsSupport{
    static KeepOrLeave=()=>{
        confirm("You are going to leave with save this change. Keep doing?")
    }
    static modules = {
        toolbar: [
            [{ 'font': [] }],
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            // ["link", "image"],
            ["link"],
            [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
            ["clean"],
        ],

    };

    static formats = [
        "font",
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "align",
        "color",
        "background",
    ];
}export default VanillaJsSupport;
