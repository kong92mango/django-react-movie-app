import React from "react";
import { List, Avatar } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Listings = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: () => {},
        pageSize: 3,
      }}
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="15"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
          extra={
            <a href={`/${item.id}`}>
              <img
                width={200}
                height={200}
                alt="logo"
                src="https://cdn4.iconfinder.com/data/icons/map-glyph/48/cinema-512.png"
              />
            </a>
          }
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://image.flaticon.com/icons/svg/25/25297.svg" />
            }
            title={<a href={`/${item.id}`}>{item.title}</a>}
            description={item.genre.map((type) => type.name).join(", ")}
          />
          {"Showings: "}
          <ul>
            {item.schedule.map((showtime) => (
              <li key={showtime.id}>
                {showtime.day.charAt(0).toUpperCase() + showtime.day.slice(1)}{" "}
                at {showtime.time}
              </li>
            ))}
          </ul>
        </List.Item>
      )}
    />
  );
};
export default Listings;
