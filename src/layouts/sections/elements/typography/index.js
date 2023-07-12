import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import TypographyRoboto from "layouts/sections/elements/typography/components/TypographyRoboto";
import typographyRobotoCode from "layouts/sections/elements/typography/components/TypographyRoboto/code";

function Typography() {
  return (
    <BaseLayout
      title="Penieltech Typography"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Typography" },
        { label: "Penieltech Typography" },
      ]}
    >
      <View title="Typography - Peniel Technology LLC" code={typographyRobotoCode}>
        <TypographyRoboto />
      </View>
    </BaseLayout>
  );
}

export default Typography;
