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
        body=""
      />
      <Section
        title="Abstract"
        body="Recent advances in style transfer text-to-speech (TTS) have improved the expressiveness of synthesized speech. Despite these advancements, encoding stylistic information from diverse and unseen reference speech remains challenging. This paper introduces StyleMoE, an approach that divides the embedding space, modeled by the style encoder, into tractable subsets handled by style experts. The proposed method replaces the style encoder in a TTS system with a Mixture of Experts (MoE) layer. By utilizing a gating network to route reference speeches to different style experts, each expert specializes in aspects of the style space during optimization. Our experiments objectively and subjectively demonstrate the effectiveness of our proposed method in increasing the coverage of the style space for diverse and unseen styles. This approach can enhance the performance of existing state-of-the-art style transfer TTS models, marking the first study of MoE in style transfer TTS to our knowledge"
      />

      <Section
        title="Purposed Method"
      >
        <img src="figures/stylemoe.png" alt="StyleMoE" />
        <div className="mt-4">
          <p className="text-sm sm:text-md italic text-justify">
            Figure 1: Architecture of StyleMoE. Subfigure (b) illustrates the integration of StyleMoE into the Style Adaptor of GenerSpeech [1]. Subfigure (c) depicts the StyleMoE layer [2], wherein each Style Expert block is a style reference encoder.
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
        title="VCTK Speech Samples: Parallel"
      >
        <Table
          data={[
            getRowData("vctk", "parallel", 1),
            getRowData("vctk", "parallel", 7),
            getRowData("vctk", "parallel", 14),
          ]}
        />
      </Section>

      <Section
        title="VCTK Speech Samples: Non-Parallel"
      >
        <Table
          data={[
            getRowData("vctk", "nonparallel", 14),
            getRowData("vctk", "nonparallel", 6),
            getRowData("vctk", "nonparallel", 15),
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
