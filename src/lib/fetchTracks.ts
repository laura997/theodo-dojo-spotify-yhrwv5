const apiToken =
  'BQD22AtUbwEBPcfBmMJMj9AHv_VBIFLp9ot56ec_7hrF0yf7Yka3dxRdJELe9W9IcYxBrJBAbvStx2h7SIZKiV495cEtGPuvEiL8Xy4UTh99EQjpvcz7dKUP3dhYTwhJ-YSXGLbLHqsVdsuVYYq_k14kuQ34q-Wf-U9tbG7zwcoI-QcitL1Bgc0_cfibTH7FQ4PAFMHgaFMEVvc6KdDhEewqr_6Vkg';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });

  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
