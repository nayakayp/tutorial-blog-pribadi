export default {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: "cover",
            title: "Image Cover",
            type: "array",
            of: [{ type: "image" }],
        },
        {
            name: "judul",
            title: "Judul",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "judul",
                maxLength: 90,
            },
        },
        {
            name: "tanggal",
            title: "Tanggal Terbit",
            type: "datetime",
        },
        {
            name: "konten",
            title: "Konten",
            type: "array",
            of: [
                {
                    type: "block",
                },
                {
                    type: "image",
                    fields: [
                        {
                            type: "text",
                            name: "alt",
                            title: "Alternative text",
                            description: `Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what\'s on your page.`,
                            options: {
                                isHighlighted: true,
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
