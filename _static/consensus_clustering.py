# To run below, you will need to intall the following packages via pip:
# $ pip install numpy pandas Cluster_Ensembles

import pandas as pd
import numpy as np
import Cluster_Ensembles as CE

human_clusters_df = pd.read_csv('human_cl.csv')
human_clusters = human_clusters_df.values
human_clusters_keys = np.zeros((human_clusters).shape)

#note that KH has over a 1000 clusters...
for i in range(human_clusters.shape[1]):
    human_clusters_dict = dict(zip(np.unique(human_clusters[:,i]), range(len(np.unique(human_clusters[:,i])))))
    human_clusters_keys[:,i] = np.vectorize(human_clusters_dict.get)(human_clusters[:,i])

consensus_clustering_labels = CE.cluster_ensembles(human_clusters_keys, verbose = True )