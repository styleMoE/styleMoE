import Section from "@/components/Section";
import Table from "@/components/Table";
import Audio from "@/components/Audio";

const references = [
  {
    citation: "R. Huang, Y. Ren, J. Liu, C. Cui, and Z. Zhao, “Generspeech: Towards style transfer for generalizable out-of-domain text-to- speech,” Advances in Neural Information Processing Systems, vol. 35, pp. 10 970–10 983, 2022.",
    link: "https://arxiv.org/abs/2205.07211"
  },
  {
    citation: "N. Shazeer, A. Mirhoseini, K. Maziarz, A. Davis, Q. Le, G. Hinton, and J. Dean, “Outrageously large neural networks: The sparsely-gated mixture-of-experts layer,” arXiv preprint arXiv:1701.06538, 2017.",
    link: "https://arxiv.org/abs/1701.06538"
  }
]

function getRowData(dataset: string, type: string, num: number) {
  const file_name = `${type}_${num}`


  return {
    "Reference Audio": <Audio path={`samples/${dataset}/reference/${type}/${file_name}.wav`} />,
    "Baseline": <Audio path={`samples/${dataset}/baseline/${type}/${file_name}.wav`} />,
    "StyleEnsemble experts=2": <Audio path={`samples/${dataset}/ensemble_e2/${type}/${file_name}.wav`} />,
    "StyleMoE experts=2, k=1": <Audio path={`samples/${dataset}/moe_e2_k1/${type}/${file_name}.wav`} />,
  }
}



export default function Home() {
  return (
    <div className="flex flex-col gap-y-8 mx-auto px-8 md:px-48 lg:64 py-8 sm:py-16">
      <Section
        title="Style Mixture of Experts for Expressive Text-To-Speech Synthesis"
        body="This is an anonymous sample site for the StyleMoE paper submitted to the Audio Imagination Workshop at NeurIPS 2024. Below, you will find audio samples from the paper. The code will be released after acceptance."
      />
      <Section
        title="Abstract"
        body="Recent advances in style transfer text-to-speech (TTS) have improved the expressiveness of synthesized speech. Despite these advancements, encoding stylistic information from diverse and unseen reference speech remains challenging. This paper introduces StyleMoE, an approach that divides the embedding space into tractable subsets handled by style experts. The proposed method replaces the style encoder in a TTS system with a Mixture of Experts (MoE) layer. By utilizing a gating network to route reference speech samples to different style experts, which specialize in different aspects of the style space, StyleMoE improves the overall speaking style coverage in style transfer TTS. Our experiments objectively and subjectively demonstrate the improvement of style transfer for diverse and unseen styles. This approach enhances the performance of existing state-of-the-art style transfer TTS models, marking the first study of style MoE in TTS"
      />

      <Section
        title="Proposed Method"
      >
        <img src="figures/stylemoe.png" alt="StyleMoE" />
        <div className="mt-4">
          <p className="text-sm sm:text-md italic text-justify">
            Figure 1: The architecture of StyleMoE-TTS. Red modules represent modules from GenerSpeech. Green modules represent the Mixture of Experts layer. Purple modules represent style experts. The darker purple modules represent the style experts chosen by the gating network. Subfigures (a) and (b) illustrate the integration of StyleMoE into StyleMoE-TTS. Subfigure (c) depicts the StyleMoE layer, wherein each Style Expert block is a style reference encoder. Subfigure (d) illustrates the gating network.
          </p>
        </div>
      </Section>


      <Section
        title="ESD Speech Samples: Parallel"
      >
        <Table
          data={[
            getRowData("esd", "parallel", 5),
            getRowData("esd", "parallel", 7),
            getRowData("esd", "parallel", 12),
          ]}
        />
      </Section>

      <Section
        title="ESD Speech Samples: Non-Parallel"
      >
        <Table
          data={[
            getRowData("esd", "nonparallel", 13),
            getRowData("esd", "nonparallel", 14),
            getRowData("esd", "nonparallel", 15),
          ]}
        />
      </Section>

      <Section
        title="References"
      >
        <ul className="flex flex-col gap-y-4">
          {references.map(({ citation, link }, index) => (
            <li key={index}>
              <a className="text-md sm:text-lg hover:underline transition-all" href={link}>
                [{index + 1}] {citation}
              </a>
            </li>
          ))}
        </ul>
      </Section>

    </div>
  )
}
