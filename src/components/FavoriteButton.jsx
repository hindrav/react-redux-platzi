import { StarOutlined, StarFilled } from "@ant-design/icons";
import { Button } from "antd";

const FavoriteButton = ({ isFavorite, onClick }) => {
    const Icon = isFavorite ? StarFilled : StarOutlined;
    return (
    <>
      <Button icon={<Icon />} onClick={onClick} />
    </>
  );
};

export { FavoriteButton };