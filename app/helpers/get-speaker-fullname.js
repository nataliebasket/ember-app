import { helper } from '@ember/component/helper';

export function getSpeakerFullname(params/*, hash*/) {
  let [lastName, firstName, patronymic] = params;
  return `${lastName} ${firstName} ${patronymic}`;
}

export default helper(getSpeakerFullname);
