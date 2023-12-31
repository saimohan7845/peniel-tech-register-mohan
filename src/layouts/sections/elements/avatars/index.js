import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import AvatarGroup from "layouts/sections/elements/avatars/components/AvatarGroup";
import AvatarSize from "layouts/sections/elements/avatars/components/AvatarSize";
import avatarGroupCode from "layouts/sections/elements/avatars/components/AvatarGroup/code";
import avatarSizeCode from "layouts/sections/elements/avatars/components/AvatarSize/code";

function Avatars() {
  return (
    <BaseLayout
      title="Penieltech Avatars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/avatars" },
        { label: "Penieltech Avatars" },
      ]}
    >
      <View title="Penieltech Avatar Group" code={avatarGroupCode}>
        <AvatarGroup />
      </View>
      <View title="Penieltech Avatar Size" code={avatarSizeCode}>
        <AvatarSize />
      </View>
    </BaseLayout>
  );
}

export default Avatars;
