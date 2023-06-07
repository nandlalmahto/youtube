const Categories = () => {

    let categories = [
            {link:"All"},
            {link:"Sports"},
            {link:"Comedy"},
            {link:"Travel"},
            {link:"News"},
            {link:"Music"},
            {link:"Kids"},
            {link:"Cartoons"},
            {link:"Movies"},
            {link:"Live"},
            {link:"Games"},
            {link:"Bollywood"},
            {link:"Songs"},
            {link:"Recently Uploaded"},
            {link:"Tollywood"}      
    ]

    return(
        <div className="categories">
            <ul>
                {categories.map((data) => {
                    return (
                        <li><a href="">{data.link}</a></li>
                    )
                })}
            </ul>
        </div>
        

    );
}
export default Categories;