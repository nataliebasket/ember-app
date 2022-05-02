import { helper } from '@ember/component/helper';

export function getSpeakerFullname(params/*, hash*/) {
  let [last_name, first_name, patronymic] = params;
  return `${last_name} ${first_name} ${patronymic}`;
}

export default helper(getSpeakerFullname);
