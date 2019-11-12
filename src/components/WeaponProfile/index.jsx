import React from "react";
import { connect } from "react-redux";
import { toggleWeaponProfile, deleteWeaponProfile } from "actions/unit.action";
import ProfileModal from "components/ProfileModal";
import { Button, List } from "semantic-ui-react";
import "./index.scss";

const WeaponProfile = ({ id, profile, toggleWeaponProfile, deleteWeaponProfile }) => (
  <div className={`profile ${profile.active ? 'active' : 'inactive'}`}>
    <input type="checkbox" onChange={() => toggleWeaponProfile(id)} checked={profile.active} />
    <div className="content">
      <div className="characteristics">
        <span className="characteristic"><b>Models:</b> {profile.num_models}</span>
        <span className="characteristic"><b>Attacks:</b> {profile.attacks}</span>
        <span className="characteristic"><b>To Hit:</b> {profile.to_hit}+</span>
        <span className="characteristic"><b>To Wound:</b> {profile.to_wound}+</span>
        <span className="characteristic"><b>Rend:</b> {profile.rend}</span>
        <span className="characteristic"><b>Damage:</b> {profile.damage}</span>
      </div>
      {profile.modifiers && profile.modifiers.length ?
        <div className="modifiers">
          <b>Modifiers</b>
          <List bulleted items={profile.modifiers.map((modifier) => modifier.name)}
          />
        </div>
        : null
      }
    </div>
    <div className="actions">
      <ProfileModal id={id} trigger={<Button size="tiny" icon="edit" className="edit" />} header={"Edit Profile"} profile={profile} />
      <Button icon="delete" size="tiny" negative onClick={() => deleteWeaponProfile(id)} />
    </div>
  </div >
)

export default connect(null, { toggleWeaponProfile, deleteWeaponProfile })(WeaponProfile);