import React from "react";

export default function PokeList({ listItems }) {
    return listItems.map((listItem) => (
        <div key={listItem.name}>
            {listItem.name}
        </div>
    ));
}
