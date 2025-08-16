'use server';
/**
 * @fileOverview A service for interacting with the Pinecone vector database.
 * This service handles initializing the Pinecone client, creating indexes,
 * embedding text, and querying for similar vectors.
 */

import { Pinecone } from '@pinecone-database/pinecone';
import { ai } from '@/ai/genkit';
import { embed } from 'genkit/ai';

const pinecone = new Pinecone();

const INDEX_NAME = 'inflowcash-knowledge-base';
const EMBEDDING_MODEL = 'googleai/text-embedding-004';
const TEXT_EMBEDDER = ai.embedder(EMBEDDING_MODEL);

/**
 * Initializes the Pinecone index, creating it if it doesn't already exist.
 * @returns {Promise<import('@pinecone-database/pinecone').Index>} A Pinecone index object.
 */
async function getOrCreateIndex() {
  const indexList = await pinecone.listIndexes();
  if (!indexList.indexes?.some((index) => index.name === INDEX_NAME)) {
    // Note: The dimension depends on the embedding model.
    // text-embedding-004 has a dimension of 768.
    await pinecone.createIndex({
      name: INDEX_NAME,
      dimension: 768,
      metric: 'cosine',
    });
  }
  return pinecone.index(INDEX_NAME);
}

/**
 * Embeds a document and stores it in the Pinecone index.
 * @param {string} docId - The unique identifier for the document.
 * @param {string} text - The text content of the document to embed.
 * @returns {Promise<void>}
 */
export async function embedAndStore(docId: string, text: string): Promise<void> {
  const index = await getOrCreateIndex();

  const embedding = await embed({
    embedder: TEXT_EMBEDDER,
    content: text,
  });

  await index.upsert([
    {
      id: docId,
      values: embedding,
      metadata: { text },
    },
  ]);
}

/**
 * Queries the Pinecone index for documents similar to the given text.
 * @param {string} text - The text to find similar documents for.
 * @param {number} topK - The number of similar documents to return.
 * @returns {Promise<string[]>} A list of text from similar documents.
 */
export async function findSimilar(text: string, topK: number): Promise<string[]> {
  const index = await getOrCreateIndex();

  const embedding = await embed({
    embedder: TEXT_EMBEDDER,
    content: text,
  });

  const queryResult = await index.query({
    vector: embedding,
    topK,
    includeMetadata: true,
  });

  return queryResult.matches.map((match) => (match.metadata?.text as string) || '');
}
