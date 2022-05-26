Experimental Methods
--------------------

.. raw:: html

   <br>
   <div class="table-responsive">

.. list-table::
   :class: table text-break
   :header-rows: 1

   * - Method
     - Multiplexed smFISH
     - Allen MERFISH
     - hybridization-based in situ sequencing
     - ExSeq
     - Visium
     - BaristaSeq
   * - **Readout mechanism**
     - non-barcoded
     - barcoded
     - sequencing-based
     - sequencing-based
     - spatial barcoding, sequencing en mass
     - sequencing-based
   * - **Enzymatic Amplification**
     - no
     - no
     - yes
     - yes
     - no readout imaging
     - yes
   * - **Publications**
     - https://www.ncbi.nlm.nih.gov/pubmed/30392798, https://www.nature.com/articles/s41467-021-23807-4
     - This unpublished MERFISH data is from a prototype pipeline with max projected z-stacks prior to decoding.
     - https://academic.oup.com/nar/article/48/19/e112/5912821#282922333
     - https://doi.org/10.1126/science.aax2656
     - https://science.sciencemag.org/content/353/6294/78
       https://www.10xgenomics.com/products/spatial-gene-expression/
     - https://doi.org/10.1093/nar/gkx1206
   * - **Number of genes**
     - 22
     - 254
     - human: 120,
       mouse: 119
     - mouse: 42
     - Full transcriptome
     - 76
   * - **Area Imaged**
     - ~3mm\ :sup:`2`
     - ~1.9mm\ :sup:`2`
     - human: 26.6mm\ :sup:`2`,
       mouse: 53.6mm\ :sup:`2`
     - mouse: ~1mm\ :sup:`2`
     - 6.5mm\ :sup:`2`
     - 0.75 x 1.2 mm
   * - **Tissue Thickness**
     - 10 μm
     - 10 μm
     - 10 μm
     - 20 μm
     - 10 μm
     -
   * - **Detection Sensitivity (high: same order of magnitude as smFISH, medium: ~1 OoM lowerthan smFISH, low: more than 1 OoM counts per cell below smFISH)**
     - high
     - medium
     - low
     - medium
     - n/a
     - low
   * - **Average Total Counts Per Cell**
     - 225
     - 919
     - human: 38.6,
       mouse: 30
     - mouse: 177 (for cells passing QC)
     - n/a
     - 70
   * - **Cellular Spatial Resolution?**
     - yes
     - yes
     - yes
     - subcellular
     - no
     - yes
   * - **Reagent Cost Per Experiment (USD)**
     - 
     - 500
     - 
     - 500
     - 
     - 
   * - **Time Per Experiment**
     - 1 week
     - 24 hours imaging, 4 days sample prep after sectioning
     - < 1 week
     - 4 days (imaging); 1 week of sample prep prior
     - ~1 day
     -

.. raw:: html
    
    </div>


In addition to the image-based spatial transcriptomics methods above, we also analyzed data from a sequencing-based method:

- **Visium**: Visium is a (commercial) sequencing-based technique, where spatially barcoded oligonucleotides with a poly-T sequence are used to capture mRNA from fresh frozen tissue samples. In the Visium platform, capture locations (hereafter; spots), containing the barcoded oligonucleotides, are arranged according by “orange-crate packing” forming an equidistant hexagonal grid.  Spots have a center to center distance of 100μm and a diameter of 55μm. A square region with sides of 6.5mm, containing 4992 spots, constitute the capture area  onto which tissue samples are attached. Brightfield images are taken of the tissue samples after staining with hematoxylin and eosin (HE-images). Count data, obtained after sequencing, can be computationally aligned to the  HE-images and related to morphological features.
