import React from "react";
import {offerType} from "../../../prop-types/prop-types.js";

const HostInfo = ({offer}) => (
  <div className="property__host-user user">
    <div
      className={`property__avatar-wrapper user__avatar-wrapper
                    ${
  offer.host.isUserPro
    ? `property__avatar-wrapper--pro`
    : ``
  }`}
    >
      <img
        className="property__avatar user__avatar"
        src={offer.host.avatarUrl}
        width="74"
        height="74"
        alt="Host avatar"
      />
    </div>
    <span className="property__user-name">{offer.host.userName}</span>
  </div>
);

HostInfo.propTypes = {
  offer: offerType.isRequired
};

export default HostInfo;
