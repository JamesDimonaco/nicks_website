
import Link from 'next/link'
import Head from 'next/head'
import Modal from '../../components/modal'
import React, { useState } from 'react'


const papers = [
    {
        'title': 'Computational analysis of SARS-CoV-2 and SARS-like coronavirus diversity in human, bat and pangolin populations',
        'abstract': 'In 2019, a novel coronavirus, SARS-CoV-2/nCoV-19, emerged in Wuhan, China, and has been responsible for the current COVID-19 pandemic. The evolutionary origins of the virus remain elusive and understanding its complex mutational signatures could guide vaccine design and development. As part of the international “CoronaHack” in April 2020, we employed a collection of contemporary methodologies to compare the genomic sequences of coronaviruses isolated from human (SARS-CoV-2; n= 163), bat (bat-CoV; n= 215) and pangolin (pangolin-CoV; n= 7) available in public repositories. We have also noted the pangolin-CoV isolate MP789 to bare stronger resemblance to SARS-CoV-2 than other pangolin-CoV. Following de novo gene annotation prediction, analyses of gene–gene similarity network, codon usage bias and variant discovery were undertaken. Strong host-associated divergences were noted in ORF3a, ORF6, ORF7a, ORF8 and S, and in codon usage bias profiles. Last, we have characterised several high impact variants (in-frame insertion/deletion or stop gain) in bat-CoV and pangolin-CoV populations, some of which are found in the same amino acid position and may be highlighting loci of potential functional relevance. View Full-Text',
        'authors': ['John Doe', 'Jane Doe'],
        'date': '2020-01-01',
        'url': 'https://www.mdpi.com/1999-4915/13/1/49',
        'doi': '10.1038/s41586-020-04987-0',
        'citation': '10.1038/s41586-020-04987-0',
        'keywords': ['keyword1', 'keyword2'],
        'image': 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=MKtAelUAAAAJ&citpid=2',
    },
    {
        'title': 'No one tool to rule them all: prokaryotic gene prediction tool annotations are highly dependent on the organism of study',
        'abstract': 'The biases in CoDing Sequence (CDS) prediction tools, which have been based on historic genomic annotations from model organisms, impact our understanding of novel genomes and metagenomes. This hinders the discovery of new genomic information as it results in predictions being biased towards existing knowledge. To date, users have lacked a systematic and replicable approach to identify the strengths and weaknesses of any CDS prediction tool and allow them to choose the right tool for their analysis.',
        'authors': ['John Doe', 'Jane Doe'],
        'date': '2020-01-01',
        'url': 'https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btab827/6454948?login=true',
        'doi': '10.1038/s41586-020-04987-0',
        'citation': '10.1038/s41586-020-04987-0',
        'keywords': ['keyword1', 'keyword2'],
        'image': 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=MKtAelUAAAAJ&citpid=2',
    },
    {
        'title': 'Papers',
        'abstract': 'hello',
        'authors': ['John Doe', 'Jane Doe'],
        'date': '2020-01-01',
        'url': 'https://www.google.com',
        'doi': '10.1038/s41586-020-04987-0',
        'citation': '10.1038/s41586-020-04987-0',
        'keywords': ['keyword1', 'keyword2'],
        'image': 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=MKtAelUAAAAJ&citpid=2',
    },
]



export default function Papers() {
    return (
        <>
            <Head>
                <title>Papers</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.min.css" />
                <script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js"></script>
            </Head>

            <div className="flex flex-col justify-center border-2 min-w-screen min-h-screen ">


                <div className="flex flex-col justify-center mx-5 my-6 ">
                    <div className="flex justify-center">
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight lg:text-6xl">
                            Nicholas J. Dimonaco
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                            Please feel free to read through my {papers.length} academic papers.
                        </p>
                    </div>
                </div>

                <div className="">
                    <ul role="list" className="flex flex-col mx-6">
                        {papers.map((paper) => {
                            const [open, setOpen] = useState(false)

                            return (
                                <div key={paper.doi} className='flex flex-col'>

                                    <Modal close={() => setOpen(false)} open={open} content={paper} />


                                    <li key={paper.doi} className="my-5 mx-6 bg-white rounded-lg shadow divide-y divide-gray-200">
                                        <div onClick={() => setOpen(true)} data-tooltip-target={paper.doi} className="hover:cursor-pointer w-full flex items-center justify-between p-6 space-x-6">
                                            <div className="flex-1 truncate">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="text-gray-900 text-sm font-medium truncate">{paper.title}</h3>

                                                </div>
                                                <p className="mt-1 text-gray-500 text-sm truncate">{paper.abstract}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="-mt-px flex divide-x divide-gray-200">
                                                <div className="w-0 flex-1 flex">
                                                    <Link
                                                        href={paper.url}>
                                                        <a target={'(_blank)'}
                                                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                                        >
                                                            {/* <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" /> */}
                                                            <span className="ml-3">Go to paper</span>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="-ml-px w-0 flex-1 flex">
                                                    <span className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 ml-3">release date: {paper.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>

                </div>
            </div>

        </>
    )
}
