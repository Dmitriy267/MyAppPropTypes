import React  from "react";
import PropTypes from 'prop-types';

const ArticleComponent1 =({ title, description})=>{
    return(
        <>
<div>
<h3>{title}</h3>
<p>{description}</p>
</div>
</>
    )
}
ArticleComponent1.propTypes={
    title:PropTypes.string,
    description:PropTypes.string,
}
export default ArticleComponent1;