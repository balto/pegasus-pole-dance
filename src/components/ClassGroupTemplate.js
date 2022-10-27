import ClassTemplate from "./ClassTemplate";
import React from "react";

const ClassGroupTemplate = ({title, classes}) => {
    return (
        <div className="row mt-2 mt-lg-5 g-5">
            <h2 className="col-md-12 class-group-title">
                {title}
            </h2>
            {
                classes.map((classData, index) =>
                    <ClassTemplate key={index}
                                   title={classData.title}
                                   subTitle={classData.subTitle}
                                   descriptions={classData.descriptions}
                                   tickets={classData.tickets}
                                   image={classData.image}
                                   index={index}
                    />
                )
            }
        </div>
    )
}

export default ClassGroupTemplate;