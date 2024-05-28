function Item({name, quantity, category}) {
    return(
        <li className="mb-4 p-4 bg-gray-100">
            <div>
                <span className="font-bold">{name}<br/></span>
                <span className="ml-2 text-gray-600">{`Buy ${quantity} in ${category}`}</span>
            </div>
        </li>
    );
};

export default Item;

