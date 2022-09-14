import { teamData } from '../../utils/teamData';

export default function handler(req, res) {
  res.status(200).json(teamData)
}
