import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
   {
      title: "Tài liệu kĩ thuật",
      Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
      description: (
         <>
            Nơi chia sẻ các bài hướng dẫn về kĩ thuật được sử dụng nhiều trong
            dự án thực tế sẽ được tổng hợp tại đây 🚀
         </>
      ),
   },
   {
      title: "Blog kiến thức",
      Svg: require("../../static/img/undraw_details.svg").default,
      description: (
         <>
            Chia sẻ về những kiến thức xung quanh cuộc sống lập trình viên, có
            group chat trao đổi với các bạn mới. 😎
         </>
      ),
   },
   {
      title: "Tài liệu React Native",
      Svg: require("../../static/img/undraw_react.svg").default,
      description: (
         <>
            Tổng hợp trường hợp và cách xử lý về react native và những tình
            huống khác 📱.
         </>
      ),
   },
];

function Feature({ Svg, title, description }) {
   return (
      <div className={clsx("col col--4")}>
         <div className="text--center">
            <Svg className={styles.featureSvg} alt={title} />
         </div>
         <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
         </div>
      </div>
   );
}

export default function HomepageFeatures() {
   return (
      <section className={styles.features}>
         <div className="container">
            <div className="row">
               {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
               ))}
            </div>
         </div>
      </section>
   );
}
