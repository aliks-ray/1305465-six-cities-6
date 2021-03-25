import React from "react";
import PropTypes from "prop-types";

const HostInfo = ({host}) => (
  <div className="property__host-user user">
    <div
      className={`property__avatar-wrapper user__avatar-wrapper
        ${host.isUserPro && `property__avatar-wrapper--pro`}`}
    >
      <img
        className="property__avatar user__avatar"
        src={host.avatarUrl}
        width="74"
        height="74"
        alt="Host avatar"
      />
    </div>
    <span className="property__user-name">{host.userName}</span>
  </div>
);

HostInfo.propTypes = {
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number.isRequired,
    isUserPro: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired
  })
};

export default HostInfo;
