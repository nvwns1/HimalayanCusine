import MenuPage from "@/components/MenuPage/MenuPage";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <object
        data="/pdf/menu.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      >
        <param name="header" value="false" />
        <p>
          PDF cannot be displayed. You can download it{" "}
          <a href="/path/to/your/pdf.pdf">here</a>.
        </p>
      </object> */}
      {/* <embed src="/pdf/menu.pdf" width="100%" height="800px " /> */}
      <MenuPage />
    </div>
  );
};

export default page;
